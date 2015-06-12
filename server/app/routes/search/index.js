'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listings = mongoose.model('Listing');

router.post('/', function(req, res, next) {
    var wordRegExp = new RegExp(req.body.searchStr, "i");
    var categoryArray;
    if (!req.body.categoryId) {
      console.log('no categorieszzzzzzzzzzZZZZZZZZZZZZ')
      Listings.find({ title: wordRegExp }).exec().then(function(listings) {
          res.send(listings);
      }).then(null, next);
    } else {
      categoryArray = req.body.categoryId.split(',');
      Listings.find({ title: wordRegExp, category: {$in: categoryArray }})
        .exec()
        .then(function(listings) {
            res.send(listings);
      }).then(null, next)
    }
});