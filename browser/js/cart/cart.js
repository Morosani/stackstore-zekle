app.config(function($stateProvider){
	$stateProvider.state('cart',{
		url:'/cart',
		templateUrl:'/js/cart/cart.html',
		controller:'CartCtrl'
	});
})

app.controller('CartCtrl',  function($scope,Cart){
	$scope.cartItems = Cart.getCart();
	$scope.removeItem = function(id){
		console.log('called remove item on ' , id); 
		$scope.cartItems = Cart.remove(id);
	}
	$scope.update=function(id,qty){
		$scope.updating = true; 
		console.log('called update ',id,' quantity ',qty); 
		$scope.cartItems = Cart.updateQty(id,qty);
	}
});