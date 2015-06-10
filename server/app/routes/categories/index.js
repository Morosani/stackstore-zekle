'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Categories = mongoose.model('Category');

router.get('/', function(req, res, next) {
  Categories.find({}).exec().then(function(categories) {
    res.send(categories);
  }).then(null, next);
})
