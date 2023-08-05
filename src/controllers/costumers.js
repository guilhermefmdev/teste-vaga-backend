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
    
    const costumerExists = await CostumersModel.findOne({ email: email,})

    if(costumerExists){
        res.send({ msg: 'Já há um cliente registrado com esse E-mail.'})
    } else {
        costumer.save()
        res.send({
            msg: 'Cliente registrado com sucesso!'
        })
    }


}

async function remove(req, res) {
    const { id } = req.params
    const remove = await CostumersModel.deleteOne({ _id: id })
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

