const router = require('express').Router();
// Controllers
const goodsController = require('../controllers/goodsController');

// GET: hostname/goods
router.get('/', goodsController.getAllGoods);
// POST: hostname/goods/create
router.post('/create', goodsController.createItem);

module.exports = router;