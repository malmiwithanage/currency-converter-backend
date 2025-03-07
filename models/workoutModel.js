const mongoose = require('mongoose')

const Schema = mongoose.Schema

const transferSchema = new Schema({
    fromCountry: String,
    toCountry: String,
    fromCurrency: String,
    toCurrency: String,
    exchangeRate: Number,
    amount: Number,
    convertedAmount: Number,
    date: { type: String, default: () => new Date().toISOString().split('T')[0] }, // YYYY-MM-DD
    time: { type: String, default: () => new Date().toLocaleTimeString('en-US', { hour12: false }) } // HH:MM:SS (24-hour format)
})

module.exports = mongoose.model('Transaction', transferSchema)