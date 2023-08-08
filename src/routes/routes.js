const router = require('express').Router()

const CostumersController = require('../controllers/costumers')
const ProductsController = require('../controllers/products')
const OrdersController = require('../controllers/orders')

router.get('/costumers', CostumersController.get)
router.post('/costumers', CostumersController.post)
router.delete('/costumers/:id', CostumersController.remove)

router.get('/products', ProductsController.get)
router.post('/products', ProductsController.post)
router.delete('/products/:id', ProductsController.remove)

router.get('/orders', OrdersController.get)
router.post('/orders', OrdersController.post)
router.delete('/orders/:id', OrdersController.remove)

module.exports = router