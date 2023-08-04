const router = require('express').Router()
const CostumersController = require('../controllers/costumers')

router.get('/costumers', CostumersController.get)
router.post('/costumers', CostumersController.post)

module.exports = router