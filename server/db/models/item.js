'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true
    },
    stockphoto: {
        url: String,
        required: true
    },
    numOfStars: {
        type: Number,
        min: 1,
        max: 5
    }


});

mongoose.model('Item', schema);