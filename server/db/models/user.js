'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    permissions: {
        type: String,
        enum: ['admin'],
        required: true
    },

    // buyerOf: {
    //     categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
    // },

    // sellerOf: {
    //     categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
    // },

    reviewHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'ReviewHistory'},

    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'},

    orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Order'}],

   // searchHistory: [{type: mongoose.Schema.Types.ObjectId, ref: 'SearchEvent'}],
   //

    photoUrl:{type: String},

    location: {
        lat: Number,
        lng: Number,
        required: true
    },

    email: {
        type: String
    },
    password: {
        type: String
    },
    salt: {
        type: String
    },
    twitter: {
        id: String,
        username: String,
        token: String,
        tokenSecret: String
    },
    facebook: {
        id: String
    },
    google: {
        id: String
    }
});

// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.
var generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function (plainText, salt) {
    var hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {

    if (this.isModified('password')) {
        this.salt = this.constructor.generateSalt();
        this.password = this.constructor.encryptPassword(this.password, this.salt);
    }

    next();

});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.method('correctPassword', function (candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
});

mongoose.model('User', schema);