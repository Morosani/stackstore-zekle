'use strict';
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required:true
    },
    comment: {
        type: String
    },
    item: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item'
    }
});
//schema.method.Avgscores
mongoose.model('Review', schema);
