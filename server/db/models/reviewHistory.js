'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Review'
    }],
    avgStars: {type:Number}
});


//schema.method.Avgscores
mongoose.model('ReviewHistory', schema);
