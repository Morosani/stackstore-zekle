'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var order = mongoose.model('Order');

router.get('/', function(req, res, next) {
  order.find({}).exec().then(function(orders) {
    res.send(orders);
  }).then(null, next);
});

router.get('/:orderId', function(req, res, next) {
  order.find({ id: req.params.orderId}).exec().then(function(order) {
    res.send(order);
  }).then(null, next);
});

router.post('/', function(req, res, next) {
	var total =0.0; 
	req.body.listings.forEach(function(entry){
		total+= entry.price

	});
	order.create({status:'created',totalPrice:total,items:req.body.listings,shipping:req.body.ship}).then(function(createdOrder){
		res.send(createdOrder); 
	},next)

});
