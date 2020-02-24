const dotenv = require('dotenv');
dotenv.config();
// Libs
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
// Importing routes
const userRoute = require('./routes/usersRoute');
const goodsRoute = require('./routes/goodsRoute');
const ordersRoute = require('./routes/ordersRoute');

const app = express(); // Creating express app

const PORT = process.env.PORT || 3000;
require('./config/mongoConnection')
// Middlewares
app.use(express.json()); // JSON bodyParser
app.use(express.urlencoded({ extended: false }));
// session settings
app.use(session({
    secret: 'dsa321SF',
    store: new FileStore(),
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 1000 // maxAge: 60 minutes
    },
    resave: false,
    saveUninitialized: false
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport-cfg');

//Routes
app.use('/users', userRoute);
app.use('/goods', goodsRoute);
app.use('/orders', ordersRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});

module.exports = app;