'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var items = mongoose.model('Item');
var listings = mongoose.model('Listing');

router.get('/', function(req, res, next) {
  items.find({}).exec().then(function(items) {
    res.status(200).send(items);
  });
})

router.delete('/:listingId/delete', function(req, res, next) {
  listings.findByIdAndRemove(req.params.listingId).exec().then(function(listing) {
    res.sendStatus(204);
  });
})

router.get('/:listingId', function(req, res, next) {
  listings.findOne({ _id: req.params.listingId }).exec().then(function(listing) {
    res.status(200).send(listing);
  });
})

router.get('/category/:id', function(req, res, next) {
  listings.find().populate('item').find({item.category._id:req.params.id}).exec().then(function(listings){
    res.status(200).send(listings);
  })
})

router.post('/create', function(req, res, next) {
  listings.create(req.body).then(function(listing) {
    res.sendStatus(201);
  });
})

