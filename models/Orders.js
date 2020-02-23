// Libs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "В обработке"
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('orders', OrderSchema);