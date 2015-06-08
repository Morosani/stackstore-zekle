'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    listing: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Listing'
    }],
    buyer: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    seller: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    price: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Listing'
    }]
});

mongoose.model('Order', schema);