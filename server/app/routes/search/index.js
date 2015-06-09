'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Listings = mongoose.model('Listing');

router.post('/', function(req, res, next) {
  Listings.find().populate('item').find({req.body}).exec().then(function(listings) {
    res.status(200).send(listings);
  })
})
