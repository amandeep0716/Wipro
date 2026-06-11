# MyFin Bank

## Overview

MyFin Bank is a full-stack banking management application developed to simulate core banking operations in a digital environment. The project was built to gain practical experience in full-stack development using the MERN stack and to understand how modern banking systems handle customer management, transactions, loan processing, and administrative operations.

The application provides separate interfaces for customers and administrators, ensuring secure and role-based access to banking functionalities.



## Key Features

### Customer Module

* Secure customer registration and login
* Dashboard with account summary
* View account balance
* Deposit and withdraw funds
* Transfer money between accounts
* View transaction history
* Apply for loans
* Receive notifications
* Manage personal profile

### Admin Module

* Secure admin authentication
* Dashboard with banking statistics
* Customer account management
* Loan approval and rejection system
* Transaction monitoring
* Customer communication support
* Notification management
* System overview and reporting



## Tech Stack

### Frontend

* React.js
* Material UI
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

### Database

* MongoDB
* Mongoose

### Testing

* Cypress (End-to-End Testing)
* Vitest (Unit Testing)



## Application Architecture

The project follows a client-server architecture.

Frontend responsibilities:

* User Interface
* Form Validation
* API Integration
* State Management
* Navigation

Backend responsibilities:

* Business Logic
* Authentication and Authorization
* Database Operations
* API Development
* Security Implementation

Database responsibilities:

* Customer Records
* Transactions
* Loan Requests
* Notifications
* User Profiles



## Folder Structure

MyFin-Bank
│
├── frontend
│   ├── src
│   ├── public
│   ├── cypress
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md



## Authentication and Security

Security was implemented using industry-standard practices:

* Password hashing using Bcrypt
* JWT-based authentication
* Protected routes
* Role-based access control
* Secure API communication
* Input validation



## Database Design

### Customer Collection

Stores customer information including:

* Name
* Email
* Password
* Account Number
* Contact Information
* Account Balance

### Transaction Collection

Stores all banking transactions:

* Sender Account
* Receiver Account
* Amount
* Transaction Type
* Timestamp

### Loan Collection

Stores customer loan requests:

* Customer Information
* Requested Amount
* Status
* Approval Details

### Notification Collection

Stores user notifications and alerts.



## Installation and Setup

### Clone Repository


git clone <repository-url>


### Frontend Setup


cd frontend
npm install
npm run dev


Frontend runs on:


http://localhost:5173


### Backend Setup


cd backend
npm install
npm start


Backend runs on:


http://localhost:5000


### Environment Variables

Create a .env file inside the backend directory:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000




## Testing

### Unit Testing


npm run test


### Cypress End-to-End Testing


npx cypress open

Test scenarios include:

* User Login
* Customer Operations
* Transaction Flow
* Loan Request Process
* Admin Dashboard Access



## Challenges Faced

During development, several challenges were encountered:

* Designing secure authentication workflows
* Managing role-based access control
* Handling transaction-related business logic
* Creating responsive dashboard interfaces
* Integrating frontend and backend APIs
* Implementing end-to-end testing

These challenges helped improve understanding of real-world application development practices.



## Learning Outcomes

This project helped strengthen skills in:

* React Development
* REST API Design
* MongoDB Database Management
* Authentication and Authorization
* Full-Stack Application Development
* Testing and Debugging
* Git and Version Control
* Software Development Lifecycle (SDLC)



## Future Improvements

Potential enhancements include:

* Online payment gateway integration
* Email and SMS notifications
* Two-factor authentication
* Account statement generation
* Mobile application support
* Real-time transaction tracking
* Advanced analytics dashboard



## Conclusion

MyFin Bank demonstrates the implementation of a secure and scalable banking management system using modern web technologies. The project provided hands-on experience in building a complete full-stack application and strengthened practical knowledge of software development, testing, and deployment processes.


Developed by

Aman Deep

Full Stack Development Training Project

MERN Stack Application
