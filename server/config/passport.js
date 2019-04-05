const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');


passport.use(
    new localStrategy({
        usernameField: 'userName'
    }, (username, password, done) => {
        User.findOne({
            userName: username
        }, (err, user) => {
            if (err)
                return done(err)
            //Uknown User
            else if (!user)
                return done(null, false, {
                    message: 'Username is not registered'
                });
            //Wrong Password
            else if (!user.verifyPassword(password))
                return done(null, false, {
                    message: 'Wrong Password'
                });
            //Authentication Succeeded
            else
                return done(null, user);
        });
    })
);