const ProductsModel = require('../models/products')

async function get(req, res) { 
    const Products = await ProductsModel.find()
    if (Products == "") {
        res.send({ msg: 'Não há produtos cadastrados!' }) 
    } else {
        res.send(Products)
    }
}

async function post(req, res) {
    const {
        name,
        price
    } = req.body

    const Product = new ProductsModel({
        name,
        price
    })
    
    const productExists = await ProductsModel.findOne({ name: name })

    if(productExists){
        res.send({ msg: 'Já há um produto registrado com esse nome.'})
    } else {
        Product.save()
        res.send({
            msg: 'Produto registrado com sucesso!'
        })
    }
}

async function remove(req, res) {
    const { id } = req.params
    const remove = await ProductsModel.deleteOne({ _id: id })
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
