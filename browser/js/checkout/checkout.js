app.config(function($stateProvider){
	$stateProvider.state('checkout',{
		url:'/checkout',
		templateUrl:'/js/checkout/checkout.html',
		controller:'CheckoutCtrl'
	})
})

app.controller('CheckoutCtrl',function($scope,Cart,Checkout){
	$scope.cartItems = Cart.getCart();
	$scope.states= Checkout.getStates(); 
	$scope.storeCart=function(){
		Checkout.createOrder(cartItems).then(function(order){
			console.log(order); 
		}); 
	}
});