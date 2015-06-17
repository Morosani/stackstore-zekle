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
		$scope.updateTotal();
	}
	$scope.update=function(id,qty,index){
		$scope.cartItems = Cart.updateQty(id,qty);
		$scope.updateTotal(); 
	}
	$scope.total = Cart.getTotal();
	$scope.updateTotal = function(){
		$scope.total = Cart.getTotal();
	}
	$scope.updateTotal(); 
});
app.controller('CartItemCtrl',function($scope){
	$scope.updating= false;
	$scope.showSpin = function(){
		console.log("calling showSpin"); 
		$scope.updating = true; 
		console.log($scope.updating); 
		setTimeout(function(){
			$scope.updating=false;
			$scope.$digest();
			console.log($scope.updating); 
		},1000);
	}
});