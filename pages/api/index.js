require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('../../routes/workouts')

const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes) // Fixed the route path to be '/api/workouts'

// Connect to DB and handle the serverless function properly
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to db');
    })
    .catch((error) => {
        console.log(error)
    })

// Vercel expects a function that handles the request and response
module.exports = (req, res) => {
    app(req, res)  // Call the Express app with the request and response
}
