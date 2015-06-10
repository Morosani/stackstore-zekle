'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var order = mongoose.model('Order');

router.get('/', function(req, res, next) {
  order.find({}).exec().then(function(orders) {
    res.status(200).send(orders);
  });
})

router.get('/:orderId', function(req, res, next) {
  order.find({ id: req.params.orderId}).exec().then(function(order) {
    res.status(200).send(order);
  });
})

router.post('/create', function(req, res, next) {
  order.create(req.body).then(function(order) {
    res.sendStatus(201);
  });
})
