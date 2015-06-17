app.config(function($stateProvider){
	$stateProvider.state('account',{
		url:'/account',
		templateUrl:'/js/account/account.html',
		controller:'AccountCtrl'
	});
})

// wire up order history

app.controller('AccountCtrl',  function($scope,Cart,Orders,Listings){
	$scope.cartItems = Cart.getCart();
	Orders.getOrderByUser().then(function(foundOrders){
		$scope.previousOrders = foundOrders; 
	});
	$scope.showSeller = false;
	$scope.showCart = true; 
	Listings.getBySeller().then(function(foundListings){
		$scope.sellerListings = foundListings; 
	})
});