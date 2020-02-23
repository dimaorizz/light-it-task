// Models
const Goods = require('../models/Goods');

const getAllGoods = async (req, res, next) => {
    try {
        const goods = await Goods.find();
        res.status(200).send(goods);
    } catch (error) {
        console.error(`Error getting goods ${error}`);
        res.status(500).send({ msg: 'Unable to get goods' });
    }
}

const createItem = async (req, res, next) => {
    if(req.body.name && req.body.cost && !isNaN(Number(req.body.cost))) {
        const item = new Goods({ name: req.body.name, cost: req.body.cost });
        item.save()
        .then(() => {
            res.status(201).send({ msg: 'New item created' });
        })
        .catch((err) => {
            console.error(`Item creation failed: ${err}`);
            res.status(500).send({ msg: 'User creation failed' });
        })
    } else {
        res.status(400).send({ msg: 'Bad input' });
    }
}

module.exports = {
    getAllGoods,
    createItem
}