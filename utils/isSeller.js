// Models
const Users = require('../models/Users');

const isSeller = async (req) => {
    const user = await Users.findById(req.session.passport.user);
    if(user.role === 0) {
        return true;
    }
    return false;
}

module.exports = isSeller;