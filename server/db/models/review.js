'use strict';
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item',
        required:true
    }
});
//schema.method.Avgscores
mongoose.model('Review', schema);
