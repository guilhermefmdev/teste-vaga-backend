const OrdersModel = require('../models/orders')
const mongoose = require('mongoose')

async function get(req, res) { 
    const Orders = await OrdersModel.find().populate({
        path:'productId', 
        select: ['name', 'price']
    }).populate({
        path:'costumerId', 
        select: ['name', 'email', 'adress']
    })
    if (Orders == "") {
        res.send({ msg: 'Não há pedidos!' }) 
    } else {
        res.send(Orders)
    }
}

async function post(req, res) {
    const {
        costumerId,
        productId,
    } = req.body

    const Order = new OrdersModel({
        _id: new mongoose.Types.ObjectId(),
        costumerId,
        productId,
    })
    Order.save()
    res.send({
        msg: 'Pedido realizado com sucesso!'
    })
}

async function remove(req, res) {
    const { id } = req.params
    const remove = await OrdersModel.deleteOne({ _id: id })
    const msg = remove.deletedCount == 1 ? 'success' : 'error'
    res.send({
        msg
    })
}

module.exports = {
    get,
    post,
    remove,
}