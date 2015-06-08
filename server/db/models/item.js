'use strict';
var crypto = require('crypto');
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
        type: String
    }
});

mongoose.model('Item', schema);