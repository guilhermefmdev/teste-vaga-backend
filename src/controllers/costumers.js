const CostumersModel = require('../models/costumers')

async function get(req, res) {
    const costumers = await CostumersModel.find()

    res.send({
        costumers
    })
}

module.exports = {
    get,

}

