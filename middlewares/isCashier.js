// Models
const Users = require('../models/Users');

const isCashier = async (req, res, next) => {
    const user = await Users.findById(req.session.passport.user);
    if(user.role === 1) {
        return next();
    } else {
        return res.redirect('/')
    }
}

module.exports = isCashier;