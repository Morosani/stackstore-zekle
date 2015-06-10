'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Categories = mongoose.model('Category');

router.get('/', function(req, res, next) {
  Categories.find({}).exec().then(function(categories) {
    res.status(200).send(categories);
  })
})
//
//router.get('/:id', function(req, res, next) {
//  Categories.findOne({ req.params.id: { $in: subcategories } }).exec().then(function(category) {
//    res.status(200).send(category);
//  })
//})