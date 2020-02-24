const router = require('express').Router();
// Controllers
const ordersController = require('../controllers/ordersController');
// Middlewares
const isAuth = require('../middlewares/isAuth');
const isAccountant = require('../middlewares/isAccountant');
const isCashier = require('../middlewares/isCashier');
const isSeller = require('../middlewares/isSeller');

// GET: hostname/orders
router.get('/?', isAuth, isAccountant, ordersController.getOrdersByDate);

// POST: hostname/orders/create
router.post('/create', isAuth, isCashier, ordersController.createOrder);

// PUT: hostname/orders/update/:id
router.put('/update/:id', isAuth, isCashier, isSeller, ordersController.updateStatus);

// GET: hostname/orders/bill/:id
router.get('/bill/:id', isAuth, isCashier, ordersController.genBill);

module.exports = router;