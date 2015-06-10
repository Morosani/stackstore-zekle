'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item', 
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    description:{
        type:String,
        required:true
    },
    photoUrl:{type:String}
    
});
mongoose.model('Listing', schema);
