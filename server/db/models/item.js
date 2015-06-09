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
        type: String
    },
    stockphoto: {
        data: Buffer,
        contentType: String
    },
    numOfStars: {
        type: Number,
        min: 1,
        max: 5
    },
    itemReview: {
        type: String
    }


});

mongoose.model('Item', schema);