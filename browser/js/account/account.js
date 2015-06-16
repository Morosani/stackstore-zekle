app.config(function($stateProvider){
	$stateProvider.state('account',{
		url:'/account',
		templateUrl:'/js/account/account.html',
		controller:'AccountCtrl'
	});
})

// wire up order history

app.controller('AccountCtrl',  function($scope,Account){
	$scope.accountItems = Account.getAccount();
});