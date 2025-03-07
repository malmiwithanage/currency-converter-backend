const express = require('express')

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//get single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//post a new workouts
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//delete a  workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//Update a workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router