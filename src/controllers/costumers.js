const CostumersModel = require('../models/costumers')

async function get(req, res) {
    const costumers = await CostumersModel.find()
    if (costumers == "") {
        res.send({ msg: 'Não há clientes cadastrados!' }) 
    } else {
        res.send(costumers)
    }

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

async function remove(req, res) {
    const { id } = req.params
    const remove = await CostumersModel.deleteOne({ _id: id })
    const msg = remove.acknowledged ? 'success' : 'error'
    res.send({
        msg
    })
}

module.exports = {
    get,
    post,
    remove,
}

