'use strict';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_qhzQZUmT0xx9LVwnCTpWidnc");

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var stripeToken = request.body.stripeToken;

var charge = stripe.charges.create({
  amount: 1000, // amount in cents, again
  currency: "usd",
  source: stripeToken,
  description: "Example charge"
}, function(err, charge) {
  if (err && err.type === 'StripeCardError') {
    // The card has been declined
  }
})

