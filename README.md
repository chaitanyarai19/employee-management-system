# Employee Management System

A full-stack Employee Management System built using **React.js, Node.js, Express.js, and MongoDB**. This application allows users to manage employee records through a simple and responsive interface with complete CRUD (Create, Read, Update, Delete) functionality.

## 🚀 Live Demo

- **Frontend:** https://employee-management-system-1-yvgq.onrender.com/
- **Backend API:** https://employee-management-system-b9h1.onrender.com
- **Employees API:** https://employee-management-system-b9h1.onrender.com/api/employees

## ✨ Features

- Add new employees.
- View all employees.
- Update existing employee information.
- Delete employee records.
- Store employee data in MongoDB Atlas.
- RESTful API using Node.js and Express.js.
- React-based frontend with reusable components.
- Frontend and backend integration.
- Environment-based API configuration.
- Cloud deployment using Render.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| JavaScript | Application logic |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| CSS | Styling |
| Git & GitHub | Version control |
| Render | Backend hosting |

## 🏗️ Project Architecture

The application follows a client-server architecture.

```text
                React Frontend
                      |
                      | HTTP Requests
                      |
                Express.js API
                      |
                      | Mongoose
                      |
                 MongoDB Atlas
```

**How it works:**

1. Users interact with the React frontend.
2. React sends HTTP requests to the Express backend.
3. Express processes the requests.
4. Mongoose communicates with MongoDB Atlas.
5. The backend returns JSON responses.
6. React updates the UI with the received data.

## 📁 Project Structure

```text
employee-management-system/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   │   └── employeeService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── index.html
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
└── README.md
```

*Note: This is the documented logical structure. Adjust folder or file names if they differ in the actual repository.*

## 📋 Prerequisites

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas) account
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

## ⚙️ Installation and Setup

Follow these steps to run the project on your local machine.

### Step 1: Clone the Repository

```bash
git clone https://github.com/chaitanyarai19/employee-management-system.git
```

Navigate to the project directory:

```bash
cd employee-management-system
```

### Step 2: Configure MongoDB Atlas

1. Create an account on MongoDB Atlas.
2. Create a new cluster.
3. Configure database access and create a database user.
4. Configure Network Access to allow your development machine.
5. Get your MongoDB connection string.

Create a database named:

```text
EmployeeManagementSystem
```

The project uses MongoDB to store employee information.

### Step 3: Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
```

Replace the MongoDB connection string with your actual Atlas connection string.

Example:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/EmployeeManagementSystem?retryWrites=true&w=majority
```

**Important:** Replace the placeholders with your actual credentials. Never commit your `.env` file to GitHub.

Start the backend server:

```bash
npm start
```

Expected terminal output:

```text
MongoDB connected
Server is running on port 3000
```

Backend will be available at:

```text
http://localhost:3000
```

Test the health endpoint:

```text
http://localhost:3000/health
```

Test the employees API:

```text
http://localhost:3000/api/employees
```

### Step 4: Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:3000/api
```

Make sure the frontend API service uses the environment variable:

```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

Start the React development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

Congratulations! Your Employee Management System should now be running locally.

## 🔗 API Documentation

The backend provides RESTful APIs for managing employee records.

**Base URL (Local):**

```text
http://localhost:3000/api/employees
```

**Base URL (Production):**

```text
https://employee-management-system-b9h1.onrender.com/api/employees
```

### Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/:id` | Update an employee |
| DELETE | `/api/employees/:id` | Delete an employee |

### 1. Get All Employees

```http
GET /api/employees
```

Example response:

```json
{
  "success": true,
  "data": [
    {
      "_id": "employee_id",
      "name": "John Doe",
      "email": "john@example.com",
      "department": "Engineering",
      "salary": 50000
    }
  ],
  "count": 1
}
```

### 2. Add an Employee

```http
POST /api/employees
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "salary": 50000
}
```

### 3. Update an Employee

```http
PUT /api/employees/:id
```

Request body:

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "department": "IT",
  "salary": 60000
}
```

### 4. Delete an Employee

```http
DELETE /api/employees/:id
```

Replace `:id` with the employee's MongoDB document ID.

## ☁️ Deployment Guide

The application can be deployed using Render and MongoDB Atlas.

### Backend Deployment – Render

1. Push your backend code to GitHub.
2. Sign in to [Render](https://render.com/).
3. Create a new **Web Service**.
4. Connect your GitHub repository.
5. Configure the following settings:

| Setting | Value |
|---|---|
| Runtime | Node |
| Branch | main |
| Root Directory | backend |
| Build Command | `npm install` |
| Start Command | `npm start` |

6. Add the following environment variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
```

7. Click **Deploy**.

Render automatically provides a public backend URL.

### Frontend Deployment – Render

1. Create a new **Static Site** in Render.
2. Connect the same GitHub repository.
3. Configure:

| Setting | Value |
|---|---|
| Root Directory | frontend |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

4. Add the environment variable:

```env
VITE_API_URL=https://employee-management-system-b9h1.onrender.com/api
```

5. Deploy the frontend.

Make sure the backend CORS configuration allows requests from your deployed frontend domain.

**Note:** Render's free backend services may go to sleep after periods of inactivity. The first request after inactivity can take longer to respond.

## 🔐 Environment Variables

Never expose credentials or secrets in your source code.

### Backend `.env`

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:3000/api
```

For production, configure the frontend API URL with your deployed backend address.

Add `.env` to `.gitignore` in both frontend and backend directories.

## 🧪 Testing the Application

After starting both servers, verify the following:

- [ ] Frontend loads successfully.
- [ ] Backend health check returns a successful response.
- [ ] MongoDB Atlas connection works.
- [ ] Employee records are displayed.
- [ ] New employees can be added.
- [ ] Existing employee records can be updated.
- [ ] Employee records can be deleted.
- [ ] Frontend reflects database changes.

## 🐛 Troubleshooting

| Issue | Possible Solution |
|---|---|
| MongoDB connection failed | Verify `MONGO_URI` and Atlas Network Access. |
| Backend not starting | Check dependencies, environment variables and Render logs. |
| Frontend cannot fetch data | Verify `VITE_API_URL` and backend availability. |
| CORS error | Configure backend CORS to allow the frontend origin. |
| API returns 404 | Verify Express route configuration and API endpoint. |
| Render takes time to respond | Free services may need time to wake up. |

## 🔮 Future Enhancements

Potential improvements for future versions:

- User authentication and authorization.
- JWT-based login and registration.
- Role-based access control.
- Employee search and filtering.
- Pagination and sorting.
- Employee profile management.
- Dashboard with employee statistics.
- Form validation and improved error handling.
- Automated testing.
- CI/CD pipeline using GitHub Actions.

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new feature branch.

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push your branch.

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request.

## 👨‍💻 Author

**Chaitanya Rai**

Software Engineer | Full-Stack Developer | Cloud Enthusiast

- GitHub: [@chaitanyarai19](https://github.com/chaitanyarai19)
- LinkedIn: [Chaitanya Rai](https://www.linkedin.com/in/chaitanyarai3/)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

⭐ If you find this project useful, consider giving it a star on GitHub!

**Built with React.js, Node.js, Express.js and MongoDB.**
