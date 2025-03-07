const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

// Get all transactions
router.get('/', getWorkouts)

// Get single transaction
router.get('/:id', getWorkout)

// Post a new transaction
router.post('/', createWorkout)

// Delete a transaction
router.delete('/:id', deleteWorkout)

// Update a transaction
router.patch('/:id', updateWorkout)

module.exports = router
