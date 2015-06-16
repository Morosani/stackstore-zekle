'use strict';
var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description:{
        type:String,
        required:true
    },
    photoUrl:{
        type:String
    },
    customerReviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }]
});

schema.plugin(deepPopulate, {
    populate: {
        'customerReviews.user': {
          select: 'firstName lastName'
        }
    }
});

mongoose.model('Listing', schema);
// need method for calculating number of reviews
