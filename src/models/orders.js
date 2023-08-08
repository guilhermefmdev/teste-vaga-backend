const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    costumerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'costumer',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'product',
        required: true,
        default: [],
    },
    
})

const Order = mongoose.model('order', schema)

module.exports = Order