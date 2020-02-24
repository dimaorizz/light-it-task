// Libs
const bcrypt = require('bcryptjs');
// Models
const Users = require('../models/Users');

const signUp = async (req, res, next) => {
    if(req.body.username && req.body.password && req.body.role) { // validating input data
        const password = await bcrypt.hash(req.body.password, 10); // encrypting password with salt = 10
        const user = new Users({ username: req.body.username, password: password, role: req.body.role });
        user.save()
        .then(() => {
            res.status(201).send({ msg: 'New user created' });
        })
        .catch((err) => {
            console.error(`User creation failed: ${err}`);
            res.status(400).send({ msg: 'User creation failed' });
        })
    } else {
        res.status(400).send({ msg: 'Bad input' });
    }
}

const signIn = async (req, res, next) => {
    if(req.body.username && req.body.password) { // validating input data
        next();
    } else {
        res.status(400).send({ msg: 'Invalid Credantials' });
    }
}

const logOut = (req, res, next) => {
    req.logout();
    res.redirect('/')
}

module.exports = {
    signUp,
    signIn,
    logOut
};