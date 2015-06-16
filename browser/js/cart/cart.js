app.config(function($stateProvider){
	$stateProvider.state('cart',{
		url:'/cart',
		templateUrl:'/js/cart/cart.html',
		controller:'CartCtrl'
	});
})

app.controller('CartCtrl',  function($scope,Cart){
	$scope.cartItems = Cart.getCart();
	$scope.updating = false; 
	$scope.removeItem = function(id){
		console.log('called remove item on ' , id); 
		$scope.cartItems = Cart.remove(id);
	}
	$scope.update=function(id,qty,index){
		// $scope.cartItems[index]['updating']=true; 
		// console.log($scope.cartItems[index]['updating']);
		console.log('called update ',id,' quantity ',qty); 
		$scope.cartItems = Cart.updateQty(id,qty);
		$scope.updateTotal(); 
		// $scope.cartItems[index]['updating']=false;
	}
	$scope.total = Cart.getTotal();
	$scope.updateTotal = function(){
		$scope.total = Cart.getTotal();
	}
	$scope.updateTotal(); 
});