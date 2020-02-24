// Models
const Users = require('../models/Users');

const isCashier = async (req) => {
    const user = await Users.findById(req.session.passport.user);
    if(user.role === 1) {
        return true;
    }
    return false;
}

module.exports = isCashier;