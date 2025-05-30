import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

// Register a new user: /auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  // encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8);
  // attempt to insert username and password into db
  try {
    const insertUser = db.prepare(
      `INSERT INTO users (username, password) VALUES (?, ?)`
    );
    const result = insertUser.run(username, hashedPassword);

    // add a default first todo
    const defaultTodo = "Hello :) Add your first todo!";
    const insertTodo = db.prepare(
      `INSERT INTO todos (user_id, task) VALUES (?, ?)`
    );
    insertTodo.run(result.lastInsertRowid, defaultTodo); // create todo

    // create a JWT token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({ token }); // send token back to user
  } catch (err) {
    console.error(err.message);
    return res.sendStatus(503);
  }
});

// Log existing user in
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // find user in db
  try {
    const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`);
    const user = getUser.get(username);

    if (!user) {
      // if user doesn't exist
      return res.status(404).json({ message: "User not found" });
    }
    // check if password matches
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // successful authentication, create a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token }); // send token back to user
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(503);
  }
});

export default router;
