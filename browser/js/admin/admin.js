app.config(function($stateProvider) {
	$stateProvider.state('adminCategories', {
		url: '/admin',
		templateUrl: 'js/admin/admin.html',
		controller:'AdminListCategoryCtrl',
		data: {
			needsAdmin: true,
			authenticate: true
		}
	});
	$stateProvider.state('adminCategories.create', {
		url: '/create',
		templateUrl: '/js/admin/createCategory.html',
		controller: 'AdminCreateCategoryCtrl',
		data: {
			needsAdmin: true
		}
	});
	$stateProvider.state('adminListings', {
		url:'/admin/listings',
		templateUrl: 'js/admin/listings.html',
		controller: 'AdminListingsCtrl',
		data: {
			needsAdmin: true,
			authenticate: true
		}
	});
	$stateProvider.state('adminEditListing', {
		url: '/edit',
		templateUrl: 'js/admin/edit.html',
		controller: 'AdminEditListingCtrl',
		data: {
			needsAdmin: true,
			authenticate: true
		}
	})
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

app.controller('AdminListingsCtrl', function($scope, $state, Listings) {
	$scope.listings;
	$scope.updateForm;
	Listings.getAll().then(function(response) {
		$scope.listings=response;
	})
	$scope.deleteListing = function(id){
		Listings.deleteListing(id);
	}
	$scope.editListing = function(id) {
		console.log('hitting')
		Listings.getOne(id).then(function(response){
			$scope.editListingForm = response;
			$state.go("adminEditListing")
		});
	}
});

app.controller('CreateCategoryCtrl', function($scope, Categories) {
	$scope.CategoryForm;
	$scope.newCategory = function() {
		Categories.createCategory($scope.CategoryForm).then(function(response) {
			console.log(response);
		});
	}
});

app.controller('AdminEditListingCtrl', function($scope, $state, Listings) {
	$scope.editListingForm;

})