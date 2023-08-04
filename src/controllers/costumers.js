const CostumersModel = require('../models/costumers')

async function get(req, res) {
    const costumers = await CostumersModel.find()

    res.send({
        costumers
    })
}

async function post(req, res) {
    const {
        name,
        email,
        phone,
        adress,
    } = req.body

    const costumer = new CostumersModel({
        name,
        email,
        phone,
        adress,
    })

    costumer.save()
    res.send({
        msg: 'Cliente registrado com sucesso!'
    })
}

module.exports = {
    get,
    post,
}

