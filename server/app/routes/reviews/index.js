'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var reviews = mongoose.model('Review');

router.get('/user/:userId', function(req, res, next) {
  reviews.find({ userId: req.params.userId }).exec().then(function(userReviews){
    return userReviews;
  });
});

router.get('/item/:itemId', function(req, res, next) {
  reviews.find({ item: req.params.itemId }).exec().then(function(arrReviews) {
    return arrReviews;
  });
})