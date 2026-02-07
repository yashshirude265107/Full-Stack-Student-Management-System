# 🎓Student Management System (Full Stack)

A professional **Full Stack Student Management System** built using  
**Spring Boot (REST API Backend)** and **React (Frontend UI)**.

The application supports complete **CRUD operations** for managing students and follows a real-world full-stack project structure.

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Web (REST API)
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### Frontend
- React (Vite)
- Axios
- Bootstrap
- JavaScript

---

## Project Structure

Student-Management-Spring-Boot/
│
├── backend
│ └── Spring Boot source code
│
├── frontend
│ └── myapp
│ └── Complete React frontend code
│
└── README.md


---

## Backend Details

### Base API URL
http://localhost:8081/api/students


### REST Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/students | Get all students |
| GET | /api/students/{id} | Get student by ID |
| POST | /api/students | Add new student |
| PUT | /api/students/{id} | Update student |
| DELETE | /api/students/{id} | Delete student |

---

## How to Run Backend (Spring Boot)

1. Open the backend project in **Eclipse / IntelliJ**
2. Configure MySQL database in `application.properties`
3. Run the main Spring Boot application

Backend will start at:
http://localhost:8081


---

## How to Run Frontend (React)


cd frontend/myapp
npm install
npm run dev
Frontend will start at:

http://localhost:5173

---

### Frontend ↔ Backend Connection

React frontend communicates with Spring Boot using Axios

REST API base URL:

http://localhost:8081/api/students

CORS enabled in backend for frontend integration

---

### Features

- Admin Dashboard UI
- View all students in tabular format
- Add new student
- Edit student details (name, email, course)
- Delete student
- REST API based architecture

## Project Description 

Developed a Full Stack Student Management System using Spring Boot and React.
Implemented RESTful APIs for CRUD operations, integrated React frontend using Axios, and followed MVC architecture with Spring Data JPA and MySQL.

---

### Author

Yash Shirude
GitHub: https://github.com/yashshirude265107

