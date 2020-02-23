// Libs
const router = require('express').Router();
const passport = require('passport');

// Controllers
const usersController = require('../controllers/usersController');

// POST: hostname/users/signUp
router.post('/signUp', usersController.signUp);
// POST: hostname/users/signIn
router.post('/signIn', usersController.signIn, passport.authenticate('local', { successRedirect: '/', failureRedirect: '/signIn'}));
// GET: hostname/logOut
router.get('/logOut', usersController.logOut);

module.exports = router;