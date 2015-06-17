app.config(function($stateProvider){
	$stateProvider.state('checkout',{
		url:'/checkout',
		templateUrl:'/js/checkout/checkout.html',
		controller:'CheckoutCtrl'
	}),
	$stateProvider.state('confirmation',{
    url:'/confirmation',
    templateUrl:'/js/checkout/confirmation.html',
    controller:'ConfirmationCtrl'
  }),
  $stateProvider.state('payment',{
		url:'/paymentalist',
		templateUrl:'/js/stripe/simple.html',
		controller:'PaymentController'
	})
})

app.controller('CheckoutCtrl',function($scope,$state,Cart,Checkout){
	$scope.cartItems = Cart.getCart();
	$scope.states= Checkout.getStates();
	$scope.total = Cart.getTotal();
	$scope.storeCart=function(){
		console.log("hitting storeCart function");
		Checkout.createOrder($scope.cartItems,$scope.orderForm).then(function(order){
			Cart.emptyCart();
			$state.go('confirmation');
		});
	}


	// $scope.charge = function () {
 //    // console.log('hello? is stripe a thing?', stripe);
 //    return stripe.card.createToken($scope.payment.card)
 //      .then(function (token) {
 //        console.log('token created for card ending in ', token.card.last4);
 //        var payment = angular.copy($scope.payment);
 //        payment.card = void 0;
 //        payment.token = token.id;
 //        return payOrder(payment);
 //      })

 //  	};

});
app.controller('ConfirmationCtrl',function($scope,Checkout){
	$scope.order = Checkout.getOrder();
});

app.controller('PaymentController', function ($scope, $state, Checkout, $http) {

    this.doCheckout = function(token) {
            alert("Got Stripe token: " + token.id);
            // $state.go('confirmation');

    };
    $scope.charge = function() {
      // console.log('$http???????', $http);
      return $http.post('/api/payments', {water: 'bottle'})
    }
    // console.log('hello, this is stripe ', stripe);
  // $scope.charge = function () {
  //   return stripe.card.createToken('4242424242424242')
  //     .then(function (token) {
  //       console.log('token created for card ending in ', token.card.last4);
  //       // var payment = angular.copy($scope.payment);
  //       var payment = {water:'bottle'};
  //       payment.card = void 0;
  //       payment.token = token.id;
  //       return $http.post('/api/payments', payment);
  //     })
  //     .then(function (payment) {
  //       console.log('successfully submitted payment for $', payment.amount);
  //     })
  //     .catch(function (err) {
  //       if (err.type && /^Stripe/.test(err.type)) {
  //         console.log('Stripe error: ', err.message);
  //       }
  //       else {
  //         console.log('Other error occurred, possibly with your API', err.message);
  //       }
  //     });
  // };
});