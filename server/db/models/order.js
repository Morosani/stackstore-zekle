'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id: {type: String},
    cart: [],
    status: {type: String},
    totalPrice: {type: Number}
});

mongoose.model('Order', schema);