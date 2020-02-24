const router = require('express').Router();
// Controllers
const goodsController = require('../controllers/goodsController');
// Middlewares
const isAuth = require('../middlewares/isAuth');

// GET: hostname/goods
router.get('/', isAuth, goodsController.getAllGoods);
// POST: hostname/goods/create
router.post('/create', isAuth, goodsController.createItem);

module.exports = router;