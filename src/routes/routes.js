const router = require('express').Router()

const CostumersController = require('../controllers/costumers')
const ProductsController = require('../controllers/products')

router.get('/costumers', CostumersController.get)
router.post('/costumers', CostumersController.post)
router.delete('/costumers/:id', CostumersController.remove)

router.get('/products', ProductsController.get)
router.post('/products', ProductsController.post)
router.delete('/products/:id', ProductsController.remove)

module.exports = router