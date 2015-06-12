app.directive('listings', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/listings/listings.html',
		controller: 'ListingsCtrl'
	}
})

// Injecting Listings Factory found at factories/Listings.js
app.controller('ListingsCtrl', function($scope, Listings,SearchResults) {
	//if searchResults exist, $scope.listings = searchresults else get all listings
	
	Listings.getAll().then(function(data) {
		$scope.listings = data;

	});
	$scope.$on("search",function(){
		$scope.listings = SearchResults.getResults();
		console.log("$scope listings ", $scope.listings); 
	})

});