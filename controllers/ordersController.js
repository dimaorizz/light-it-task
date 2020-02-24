// Models
const Orders = require('../models/Orders');
const Goods = require('../models/Goods');
// Middlewares

// Utils
const isCashier = require('../utils/isCashier');
const isSeller = require('../utils/isSeller');

const getOrdersByDate = async (req, res, next) => {
    try {
        let orders = await Orders.find();
        if(req.query.from && req.query.to) {
            orders = orders.filter( order => { // filter by date using converting date to ms via getTime method
                return order.creationDate.getTime() >= Number(req.query.from) && order.creationDate.getTime() <= Number(req.query.to);
            });
        }
        res.status(200).send(orders);
    } catch (error) {
        console.error(`Error getting orders: ${error}`);
        res.status(500).send({ msg: `Database error` });
    }
};

const createOrder = async (req, res, next) => {
    const monthMiliseconds = 2592000000; // amount of miliseconds in one month
    if(req.body.productId) {
        try {
            const item = await Goods.findById(req.body.productId);
            if(new Date().getTime() - item.creationDate.getTime() > monthMiliseconds) { // if item was added a month ago
                req.body.discount = 20;
            }
            const order = new Orders(req.body);
            order.save()
            .then(() => {
                res.status(201).send({ msg: 'New order created' });
            })
            .catch(err => {
                console.error(`Order creation failed: ${err}`);
                res.status(501).send({ msg: 'Order creation failed' });
            })
        } catch (error) {
            res.status(501).send({ msg: `An error occured: ${error}` });
        }
    } else {
        res.status(400).send({ msg: 'Bad input' });
    }
};

const updateStatus = async (req, res, next) => {
    if(req.params.id) {
        if(await isCashier(req)) {
            Orders.updateOne({ _id: req.params.id}, { status: 'Оплачено' })
            .then(() => res.status(200).send({ msg: 'status updated by cashier'} ))
            .catch((err) => res.status(500).send({ msg: `Updating status error: ${err}` }));
        } else if(await isSeller(req)) {
            Orders.updateOne({ _id: req.params.id}, { status: 'Обработано' })
            .then(() => res.status(200).send({ msg: 'status updated by seller'} ))
            .catch((err) => res.status(500).send({ msg: `Updating status error: ${err}` }));
        }
    } else {
        res.status(400).send({ msg: `Bad input`});
    }
};

module.exports = {
    getOrdersByDate,
    createOrder,
    updateStatus,
}