// Libs
const router = require('express').Router();
const passport = require('passport');

// Controllers
const usersController = require('../controllers/usersController');

// POST: hostname/users/create
router.post('/signUp', usersController.signUp);
router.post('/signIn', usersController.signIn, passport.authenticate('local', { successRedirect: '/', failureRedirect: '/signIn'}));
router.get('/logOut', usersController.logOut);

module.exports = router;