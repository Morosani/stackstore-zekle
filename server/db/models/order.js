'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	cart: {
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	status: {
		type: String,
		enum: ['created', 'processing', 'cancelled', 'completed']
	}, // $enum
	totalPrice: {
		type: Number
	}
});

mongoose.model('Order', schema);