app.config(function($stateProvider){
	$stateProvider.state('checkout',{
		url:'/checkout',
		templateUrl:'/js/checkout/checkout.html',
		controller:'CheckoutCtrl'
	})
})

app.controller('CheckoutCtrl',function($scope,Cart){
	$scope.cartItems = Cart.getCart();

});