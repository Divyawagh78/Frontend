const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRouter = require('./routes/contact');
const projectRouter = require('./routes/projects');
const experienceRouter = require('./routes/experience');
const authRouter = require('./routes/auth');
const { protect } = require('./middleware/auth');

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is running' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);
app.use('/api/projects', protect, projectRouter);
app.use('/api/experience', protect, experienceRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  console.log(`Frontend URL: http://localhost:3000`);
});
