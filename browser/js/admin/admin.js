//app.config(function($stateProvider){
//	$stateProvider.state('admin',{
//		url:'/admin',
//		templateUrl:'/js/admin/admin.html',
//		controller:'AdminCtrl'
//	})
//})

app.config(function($stateProvider) {
	$stateProvider.state('adminCategories', {
		url: '/admin',
		templateUrl: 'js/admin/admin.html',
		controller:'AdminListCategoryCtrl'
	});
	$stateProvider.state('adminCategories.create', {
		url: '/create',
		templateUrl: '/js/admin/createCategory.html',
		controller: 'AdminCreateCategoryCtrl'
	});
	$stateProvider.state('adminListings', {
		url:'/admin/listings',
		templateUrl: 'js/admin/listings.html',
		controller: 'AdminListingsCtrl'
	});
});

app.controller('AdminListCategoryCtrl', function($scope,Categories){
	$scope.categories;
	Categories.getAll().then(function(response){
		$scope.categories=response;
	})
});


app.controller('AdminCreateCategoryCtrl', function($scope, Categories) {
	$scope.adminCreateCategoryForm;
	$scope.newCategory = function() {
		Categories.createCategory($scope.adminCreateCategoryForm).then(function(response) {
			console.log(response);
		});
	}
});

app.controller('AdminListingsCtrl', function($scope, Listings) {
	$scope.listings;
	Listings.getAll().then(function(response) {
		$scope.listings=response;
	})
	$scope.deleteListing = function(id){
		Listings.deleteListing(id);
	}
});