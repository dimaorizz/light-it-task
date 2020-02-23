// Libs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: { 
        type: Number, // 0 - seller; 1 - cashier; 2 - accountant;
        required: true,
    }
});

module.exports = mongoose.model('users', UsersSchema);