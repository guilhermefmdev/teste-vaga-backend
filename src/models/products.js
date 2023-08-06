const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    price: Number,
})

const Product = mongoose.model('product', schema)

module.exports = Product