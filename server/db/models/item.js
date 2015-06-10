'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    }],
    photoUrl: {type: String},
    numStars: {
        type: Number,
        min: 1,
        max: 5
    }


});

mongoose.model('Item', schema);