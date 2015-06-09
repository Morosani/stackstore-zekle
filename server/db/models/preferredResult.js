'use strict'
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	search:{type: mongoose.Schema.Types.ObjectId, ref: 'SearchEvent'},
	selectedListing:{type: mongoose.Schema.Types.ObjectId, ref: 'Listing'}
});

mongoose.model('SearchEvent', schema);