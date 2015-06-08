'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    item: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    }],
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }]
});
mongoose.model('Listing', schema);
