const router = require('express').Router();

// Controllers
const usersController = require('../controllers/usersController');

// POST: hostname/users/create
router.post('/signUp', usersController.signUp);

module.exports = router;