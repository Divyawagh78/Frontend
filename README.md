# Portfolio Website with Admin Dashboard

A full-stack portfolio website with an admin dashboard for content management.

## Features

- Modern, responsive portfolio website
- Secure admin dashboard
- Project management
- Experience management
- Contact form with message management
- JWT-based authentication
- MongoDB database
- File upload capability

## Tech Stack

- Frontend:
  - React.js
  - React Router
  - Axios for API calls
  - Modern CSS with responsive design

- Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - CORS enabled
  - Error handling middleware

## Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd <repository-name>
```

2. **Install dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

3. **Environment Setup**

Create `.env` file in the backend directory with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. **Start MongoDB**
```bash
# Windows
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="c:\data\db"
```

5. **Create Admin User**
```bash
cd backend
node scripts/createAdmin.js
```

6. **Start the Servers**

In one terminal (backend):
```bash
cd backend
npm start
```

In another terminal (frontend):
```bash
npm start
```

7. **Access the Application**
- Frontend: http://localhost:3000
- Admin Login: http://localhost:3000/admin/login
- Default admin credentials:
  - Email: admin@example.com
  - Password: admin123

## API Endpoints

### Authentication
- POST `/api/auth/login` - Login
- GET `/api/auth/me` - Get current user

### Projects
- GET `/api/projects` - Get all projects
- POST `/api/projects` - Create project
- PUT `/api/projects/:id` - Update project
- DELETE `/api/projects/:id` - Delete project

### Experience
- GET `/api/experience` - Get all experiences
- POST `/api/experience` - Create experience
- PUT `/api/experience/:id` - Update experience
- DELETE `/api/experience/:id` - Delete experience

### Contact
- GET `/api/contact` - Get all messages
- POST `/api/contact` - Send message
- DELETE `/api/contact/:id` - Delete message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
