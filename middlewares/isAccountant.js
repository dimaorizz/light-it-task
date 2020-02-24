// Models
const Users = require('../models/Users');

const isAccountant = async (req, res, next) => {
    const user = await Users.findById(req.session.passport.user);
    if(user.role === 2) {
        return next();
    } else {
        return res.redirect('/')
    }
}

module.exports = isAccountant;