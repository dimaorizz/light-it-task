require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if(err) {
        console.error(`Mongo connection error : ${err}`);
    } else {
        console.log('MongoDB connected successfully');
    }
})