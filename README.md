# Personal Portfolio

This is a personal portfolio website built with React for the frontend and Express.js for the backend. It includes sections for about, projects, skills, and a contact form.

## Features

- Responsive design with Tailwind CSS
- Dynamic project listing
- Contact form with email functionality
- Smooth navigation with React Router

## Setup Instructions

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
3. Create a `.env` file based on the `.env.example` template.
4. Start the server:
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
PORT=5000
```

## License

This project is licensed under the MIT License.