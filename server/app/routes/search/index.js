'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listings = mongoose.model('Listing');

router.get('/', function(req, res) {
    console.log(req.query.searchStr);
    console.log(req.query.categoryId);
    res.send('slfgij');

  Listings.find().populate('item').find(req.body).exec().then(function(listings) {
    res.send(listings);
  }).then(null, next);
})
//
////router.post('/', function(req, res) {
//  Listings.find({ item: req.body }).populate
//})