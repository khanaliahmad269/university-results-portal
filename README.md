# University Results Portal

## Description
A web application for students to view their results and staff to post results.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: SQLite

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- SQLite installed

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set your environment variables.
4. Start the server:
   ```bash
   npm run dev
   ```

## Features
- User authentication with JWT
- Role-based access control
- View results for students
- Post results for staff
- Admin management of users and results

## API Endpoints
- `POST /api/auth/login`: Authenticate user and return a token.
- `GET /api/results`: Get results for the logged-in student.
- `POST /api/results`: Post a new result by staff.
- `GET /api/users`: Get a list of all users (admin only).
- `POST /api/users`: Create a new user (admin only).