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
    categories: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Categories',
        required: true
    }],
    photoUrl: {type: String},
    numStars: {
        type: Number,
        min: 1,
        max: 5
    }


});

mongoose.model('Item', schema);