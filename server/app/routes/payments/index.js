'use strict'
var router = require('express').Router();
var _ = require('lodash');
var mongoose = require('mongoose');
// var stripe = require('stripe')('');
// var order = mongoose.model('Order');
// stripe.setApiKey('sk_test_9OwQK1iNPCZgUjG7IAJRa0lX');

router.post('/',function(req,res,next){
  console.log('req.body from payments route', req.body);
  res.end();
})
module.exports = router;