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
});
app.controller('ConfirmationCtrl',function($scope,Checkout){
	$scope.order = Checkout.getOrder();
});