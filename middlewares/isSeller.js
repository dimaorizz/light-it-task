// Models
const Users = require('../models/Users');

const isSeller = async (req, res, next) => {
    const user = await Users.findById(req.session.passport.user);
    if(user.role === 0) {
        return next();
    } else {
        return res.redirect('/')
    }
}

module.exports = isSeller;