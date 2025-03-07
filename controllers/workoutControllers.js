const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    try {
        const workout = await Workout.findById(id)

        if (!workout) {
            return res.status(404).json({ error: 'No such record' })
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Create new workout
const createWorkout = async (req, res) => {
    const { fromCountry, toCountry, fromCurrency, toCurrency, exchangeRate, amount, convertedAmount, date, time } = req.body

    // Add doc to db
    try {
        const workout = await Workout.create({ fromCountry, toCountry, fromCurrency, toCurrency, exchangeRate, amount, convertedAmount, date, time })
        res.status(201).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    try {
        const workout = await Workout.findByIdAndDelete(id)

        if (!workout) {
            return res.status(404).json({ error: 'No such record' })
        }

        res.status(200).json({ message: 'Workout deleted' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    try {
        const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true })

        if (!workout) {
            return res.status(404).json({ error: 'No such record' })
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
