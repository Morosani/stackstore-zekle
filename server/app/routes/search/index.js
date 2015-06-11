'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listings = mongoose.model('Listing');

router.get('/', function(req, res) {
    var wordRegExp = new RegExp(req.query.searchStr, "i");
    Listings.find({ title: wordRegExp, category: {$in: req.query.categoryId }})
      .exec()
      .then(function(listings) {
          res.send(listings);
      }).then(null, next)
});