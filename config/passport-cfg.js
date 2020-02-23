const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/User');

passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username });
    if(user === null) {
        return done(null, false);
    }
    try{
        if(password === user.password) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch(err) {
        return done(err);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    const user = User.findById({ id });
    return done(null, user);
})