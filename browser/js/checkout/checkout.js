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
	})
})

app.controller('CheckoutCtrl',function($scope,$state,Cart,Checkout,stripe){
	$scope.cartItems = Cart.getCart();
	$scope.states= Checkout.getStates(); 
	$scope.storeCart=function(){
		console.log("hitting storeCart function");
		Checkout.createOrder($scope.cartItems,$scope.orderForm).then(function(order){
			Cart.emptyCart(); 
			$state.go('confirmation'); 
		}); 
	}

	$scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
      .then(function (token) {
        console.log('token created for card ending in ', token.card.last4);
        var payment = angular.copy($scope.payment);
        payment.card = void 0;
        payment.token = token.id;
        return $http.post('https://yourserver.com/payments', payment);
      })
      
  	};

});
app.controller('ConfirmationCtrl',function($scope,Checkout){
	$scope.order = Checkout.getOrder();
});