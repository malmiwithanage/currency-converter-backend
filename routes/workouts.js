const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
} = require('../controllers/workoutControllers')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get single workouts
router.get('/:id', getWorkout)

//post a new workouts
router.post('/', createWorkout)

//delete a  workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//Update a workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router