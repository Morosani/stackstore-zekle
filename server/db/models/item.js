'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    stockphoto: {
        data: Buffer,
        contentType: String
    },
    numOfStars: {
        type: Number,
        min: 1,
        max: 5
    }


});

mongoose.model('Item', schema);