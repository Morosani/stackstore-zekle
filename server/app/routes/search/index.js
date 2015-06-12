'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listings = mongoose.model('Listing');

router.get('/', function(req, res, next) {
    var wordRegExp = new RegExp(req.param.searchStr, "i");
    var categoryArray;
    if (!req.query.categoryId) {
      console.log('no categorieszzzzzzzzzzZZZZZZZZZZZZ')
      // console.log(req.query);
      Listings.find({ title: wordRegExp }).exec().then(function(listings) {
          res.send(listings);
      }).then(null, next);
    } else {
      categoryArray = req.query.categoryId.split(',');
      Listings.find({ title: wordRegExp, category: {$in: categoryArray }})
        .exec()
        .then(function(listings) {
            res.send(listings);
      }).then(null, next)
    }
});