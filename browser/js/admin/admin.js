app.config(function($stateProvider){
	$stateProvider.state('admin',{
		url:'/admin',
		templateUrl:'/js/admin/admin.html',
		controller:'AdminCtrl'
	})
})

app.controller('AdminCtrl', function($scope){
	
	
})