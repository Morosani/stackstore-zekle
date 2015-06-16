'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var stripe = require('stripe')('');
var order = mongoose.model('Order');
stripe.setApiKey('sk_test_9OwQK1iNPCZgUjG7IAJRa0lX');

router.post('/pay',function(req,res,next){

})