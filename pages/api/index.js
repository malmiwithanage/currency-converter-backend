require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('../../routes/workouts');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// Enable CORS (Allows access from any frontend)
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(error));

// Vercel expects an exported handler
module.exports = app;
