'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    item: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    }],
    quantity: {
        type: Number,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    photoUrl:{type:String},
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});
mongoose.model('Listing', schema);
