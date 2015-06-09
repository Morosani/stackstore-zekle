'use strict'
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	queryString: {type: String},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'} 

});

mongoose.model('SearchEvent', schema);