'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listings = mongoose.model('Listing');

router.post('/', function(req, res, next) {
  Listings.find().populate('item').find(req.body).exec().then(function(listings) {
    res.status(200).send(listings);
  })
})

//router.post('/', function(req, res) {
//  Listings.find({ item: req.body }).populate
//})