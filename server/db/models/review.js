'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comments: {
        type: String
    },
    item: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    }
});


//schema.method.Avgscores
mongoose.model('Review', schema);
