'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var Listing = mongoose.model('Listing');

router.get('/', function(req, res, next) {
  Listing.find({}).exec().then(function(items) {
    res.status(200).send(items);
  });
});

router.get('/category/:id', function(req, res, next) {
  Listing.find({}).populate('item').exec().then(function(items) {
    items.find({})

    res.status(200).send(items);
  });
});

router.delete('/:listingId/delete', function(req, res, next) {
  Listing.findByIdAndRemove(req.params.listingId).exec().then(function(listing) {
    res.sendStatus(204);
  });
});

router.get('/:listingId', function(req, res, next) {
  Listing.findOne({ _id: req.params.listingId }).exec().then(function(listing) {
    res.status(200).send(listing);
  });
});

//router.get('/category/:id', function(req, res, next) {
//  Listing.populate('item').populate('category').find({ category.})
//  Listing.find().populate('item').find({items.category :req.params.id}).exec().then(function(listings){
//    res.status(200).send(listings);
//  })
//})

router.post('/create', function(req, res, next) {
  Listing.create(req.body).then(function(listing) {
    res.sendStatus(201);
  });
});

