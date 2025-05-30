<<<<<<< HEAD
# 📝 PRAC-FULLSTACK-APP: Simple To-Do Application

A full-stack **To-Do List Application** built with:

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: SQLite

---

## 📁 Project Structure

PRAC-FULLSTACK-APP/
├── public/ # Static frontend files
│ ├── fanta.css
│ ├── index.html
│ └── styles.css
├── src/
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── todoRoutes.js
│ ├── db.js # SQLite DB setup and access
│ └── server.js # Express server setup
├── .env # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── README.md # You're here!
└── todo-app.rest # REST Client test file

---

## 🚀 Features

- User authentication (basic)
- Add, edit, delete to-do items
- Persistent storage using SQLite
- Secure backend with middleware
- RESTful API routes
- Frontend served with static HTML/CSS/JS

---

## 📦 Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/prac-fullstack-app.git
cd prac-fullstack-app
```
2. **Install dependencies**
```bash
npm install
```

3. **Create a .env file and set up environment variables**
PORT=3000
JWT_SECRET=your_jwt_secret_here

4. **Run the app**
```bash
node src/server.js
```
The app will be running at http://localhost:3000

📬 API Endpoints
Auth
POST /login — Authenticate user and set JWT cookie

POST /register — Register new user

To-Do
GET /todos — Get all to-dos

POST /todos — Add new to-do

PUT /todos/:id — Update a to-do

DELETE /todos/:id — Delete a to-do

(Authorization required on all /todos routes)

🛡 Security Notes
JWT tokens are not stored in HttpOnly cookies but only local storage

Routes are protected using authMiddleware.js
=======
# prac-fullstack-app
>>>>>>> db2ddd986287c07eeb411c7a73f7056470c30c2f
