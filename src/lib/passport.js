require('../db/mongoose');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../user/userModel');

module.exports = function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            let user = await User.findByCredentials(email, password);
            return done(null, user);
        } catch (error) {
            return done(null, false, {message: error});
        }
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}