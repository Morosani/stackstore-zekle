app.config(function($stateProvider){
	$stateProvider.state('cart',{
		url:'/cart',
		templateUrl:'/js/cart/cart.html',
		controller:'CartCtrl'
	});
})

app.controller('CartCtrl',  function($scope,Cart){
	$scope.cartItems = Cart.getCart();
});