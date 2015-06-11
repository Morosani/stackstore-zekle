app.directive('listings', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/listings/listings.html',
		controller: 'ListingsCtrl'
	}
})

// Injecting Listings Factory found at factories/Listings.js
app.controller('ListingsCtrl', function($scope, Listings) {
	$scope.listings;
	Listings.getAll().then(function(data) {
		console.log("running get listings controller");
		$scope.listings = data;

	})
	
})