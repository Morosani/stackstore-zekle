'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var fs = require('fs'); 
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('BCRvi3cKhPXJKPXcLHOYHQ');
var ejs = require('ejs'); 
var Order = mongoose.model('Order');

function sendEmail(to_name, to_email, from_name, from_email, subject, message_html){
	console.log("called sendEmail"); 
	var message = {
		"html": message_html,
		"subject": subject,
		"from_email": from_email,
		"from_name": from_name,
		"to": [{
			"email": to_email,
			"name": to_name
		}],
		"important": false,
		"track_opens": true,    
		"auto_html": false,
		"preserve_recipients": true,
		"merge": false,
		"tags": [
		"Zekle Order Confirmation"
		]    
	};
	var async = false;
	var ip_pool = "Main Pool";
	mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
		console.log("email sent");
        // console.log(message);
        	console.log(result);   
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
}
router.get('/', function(req, res, next) {
	Order.find({}).exec().then(function(orders) {
		res.send(orders);
	}).then(null, next);
});

router.get('/:orderId', function(req, res, next) {
	Order.findOne({_id: req.params.orderId}).exec().then(function(foundOrder) {
		res.send(foundOrder);
	}).then(null, next);
});
router.get('/user/:id',function(req,res,next){
	console.log(req.params.id); 
	Order.find({user:req.params.id}).exec().then(function(foundOrders){
		console.log(foundOrders); 
		res.send(foundOrders); 
	});
});
router.get('/seller/:id',function(req,res,next){
	console.log(req.params.id); 
	Order.find({seller:req.params.id}).exec().then(function(foundOrders){
		console.log(foundOrders); 
		res.send(foundOrders); 
	});
});
router.post('/', function(req, res, next) {
	
	var total =0.0; 
	req.body.listings.forEach(function(entry){
		total+= (entry.price*entry.quantity);

	});
	Order.create({user:req.session.passport.user, status:'created',totalPrice:total,items:req.body.listings,shipping:req.body.ship}).then(function(createdOrder){
		
		var emailTemplate= fs.readFileSync(__dirname+'/email.html','utf8'); 
		var url = req.headers.origin+"/order/"+createdOrder._id;
		var customizedTemplate = ejs.render(emailTemplate,{orderNumber:createdOrder._id,orderUrl:url,orderTotal:createdOrder.totalPrice}); 
		sendEmail(createdOrder.shipping.name,createdOrder.shipping.email,'Zekle','dan@zekle.com','Order Confirmation',customizedTemplate);
		res.send(createdOrder); 
	},next)

});
