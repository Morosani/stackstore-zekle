app.config(function($stateProvider){
	$stateProvider.state("order",{
		url:'/order/:id',
		templateUrl:'js/orders/orders.html',
		controller:'ShowOrderCtrl'
		
	});
})

app.controller('ShowOrderCtrl',  function($scope,$stateParams,Orders){
	console.log('stateParams id ', $stateParams.id); 
	Orders.getOrderById($stateParams.id).then(function(order){
		console.log("order found or something like that"); 
		$scope.order = order;
	});
});