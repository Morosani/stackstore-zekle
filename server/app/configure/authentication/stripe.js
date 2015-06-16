'use strict';

var stripe = require('stripe')('sk_test_qhzQZUmT0xx9LVwnCTpWidnc');

module.exports = function(app) {

	var stripeToken = request.body.stripeToken;

	var charge = stripe.charges.create({
	  amount: 1000, // how to populate??
	  currency: "usd", // how to populate?
	  source: stripeToken,
	  description: "Example charge" // how to populate?
	}, function(err, charge) {
	  if (err && err.type === 'StripeCardError') {
	    // The card has been declined
	  }

	  //BUILD TRANSFER TO 'THANK YOU' PAGE
	});

};