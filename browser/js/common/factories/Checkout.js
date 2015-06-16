app.factory('Checkout',function($http){
	var states =[
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District Of Columbia",
	"Federated States Of Micronesia",
	"Florida",
	"Georgia",
	"Guam",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Marshall Islands",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Northern Mariana Islands",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Palau",
	"Pennsylvania",
	"Puerto Rico",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virgin Islands",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
	]; 
	var myOrder;
	return {
		getStates :function(){
			return states; 
		},
		createOrder:function(data,shipping){

			return $http.post('/api/orders/',{listings:data,ship:shipping}).then(function(createdOrder){
				myOrder = createdOrder.data; 
				return createdOrder.data; 
			});
		},
		getOrder:function(){
			return myOrder; 
		},
		payOrder:function(payment){
			return $http.post('/api/payments/pay').then(function (paid) {
				console.log("successfully submitted payment for $", paid.amount);
			}).catch(function (err) {
		        if (err.type && /^Stripe/.test(err.type)) {
		          console.log('Stripe error: ', err.message);
		        }
		        else {
		          console.log('Other error occurred, possibly with your API', err.message);
		        }
      		});
		}
	};
})