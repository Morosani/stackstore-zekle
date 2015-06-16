'use strict';
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    shipping:{
        name:String,
        email:String,
        phone:String,
        address1:String,
        address2:String,
        city:String,
        state:String,
        Zip:String
    },
    status: {
    	type: String, 
    	enum: ['created', 'processing', 'cancelled', 'completed'],
    	required: true
    }, 
    totalPrice: {
    	type: Number,
    	required: true
    },
    items:[]
});
schema.plugin(timestamps);
mongoose.model('Order', schema);