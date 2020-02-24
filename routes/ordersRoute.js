const router = require('express').Router();
// Controllers
const ordersController = require('../controllers/ordersController');

// GET: hostname/orders
router.get('/?', ordersController.getOrdersByDate);

// POST: hostname/orders/create
router.post('/create', ordersController.createOrder);

// PUT: hostname/orders/update
router.put('/update/:id', ordersController.updateStatus);

module.exports = router;