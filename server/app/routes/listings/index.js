'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Listing = mongoose.model('Listing');

router.get('/', function(req, res, next) {
  Listing.find({}).exec().then(function(items) {
    res.send(items);
  }).then(null, next);
});

router.get('/category/:id', function(req, res, next) {
  Listing.find({}).populate('item').exec().then(function(items) {
    items.find({})

    res.send(items);
  }).then(null, next);
});

router.delete('/:listingId', function(req, res, next) {
  Listing.findByIdAndRemove(req.params.listingId).exec().then(function(listing) {
    res.sendStatus(204);
  }).then(null, next);
});

router.get('/:listingId', function(req, res, next) {
  Listing.findOne({ _id: req.params.listingId }).exec().then(function(listing) {
    res.send(listing);
  }).then(null, next);
});

//router.get('/category/:id', function(req, res, next) {
//  Listing.populate('item').populate('category').find({ category.})
//  Listing.find().populate('item').find({items.category :req.params.id}).exec().then(function(listings){
//    res.status(200).send(listings);
//  })
//})

router.post('/create', function(req, res, next) {
  console.log('hitting the create route'); 
  console.log(req.body);
  Listing.create(req.body).then(function(listing) {
    res.sendStatus(201);
  }).then(null, next);
});

