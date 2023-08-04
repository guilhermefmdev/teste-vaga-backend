const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    adress: String,
})

const Costumer = mongoose.model('costumer', schema)

module.exports = Costumer
