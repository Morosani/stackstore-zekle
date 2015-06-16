'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var reviews = mongoose.model('Review');
var ReviewHistory = mongoose.model('ReviewHistory');

router.get('/',function(req,res,next){
	ReviewHistory.
	res.end();
});
router.get('/user/:userId', function(req, res, next) {
  reviews.find({ userId: req.params.userId }).exec().then(function(userReviews){
    return userReviews;
  }).then(null, next);
});

router.get('/item/:itemId', function(req, res, next) {
  reviews.find({ item: req.params.itemId }).exec().then(function(arrReviews) {
    return arrReviews;
  }).then(null, next);
});

router.post('/create', function(req, res, next) {
  console.log('req.body?????????', req.body);
  reviews.create(req.body).then(function(review) {
    console.log('DID I MAKE A REVIEW?? ', review)
    res.send(review);
  }).then(null, next);
});