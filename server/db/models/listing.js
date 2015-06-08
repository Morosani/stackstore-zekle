'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var Item = require('./item.js');

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
    
});

mongoose.model('Item', schema);