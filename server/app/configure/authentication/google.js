'use strict';

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

module.exports = function (app) {

    var googleConfig = app.getValue('env').GOOGLE;

    var googleCredentials = {
        clientID: googleConfig.clientID,
        clientSecret: googleConfig.clientSecret,
        callbackURL: googleConfig.callbackURL
    };

    var verifyCallback = function (accessToken, refreshToken, profile, done) {
        UserModel.findOne({ 'google.id': profile.id }, function (err, user) {

            if (err) return done(err);

            if (user) {
                done(null, user);
            } else {
                UserModel.create({
                    
                        firstName: profile._json.given_name,
                        lastName: profile._json.family_name,
                    
                    email: profile.emails[0].value, 
                    location:{
                        lat:1000,
                        lng:1000
                    },
                    phoneNumber:"5555555555",
                    google: {
                        id: profile.id
                    }
                }).then(function (user) {
                    done(null, user);
                }, function (err) {
                    console.error('Error creating user from Google authentication', err);
                    done(err);
                });
            }

        });

    };

    passport.use(new GoogleStrategy(googleCredentials, verifyCallback));

    app.get('/auth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/');
        });

};