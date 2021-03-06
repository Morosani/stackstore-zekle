app.directive('listings', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/listings/listings.html',
		controller: 'ListingsCtrl'
	}
})

// Injecting Listings Factory found at factories/Listings.js
app.controller('ListingsCtrl', function($scope, $state, Listings,SearchResults,Cart) {
	//if searchResults exist, $scope.listings = searchresults else get all listings
	$scope.letterLimit = 100;
	Listings.getAll().then(function(data) {
		$scope.listings = data;
		console.log("$scope listings from getAll: ", $scope.listings);
	});

/*	$scope.getDetails = function(listing){
		var id = Listings.getObjectId(listing);
		$scope.detailsId = id;
		Listings.getOne(id).then(function(data) {
			$scope.listing = Listings.listing = data;
		});

		$state.go('listingState.details');
	}*/


	$scope.$on("search",function(){
		$scope.listings = SearchResults.getResults();
		$scope.searchRes = true;
		console.log("$scope listings from search", $scope.listings);
	})
	$scope.addListingToCart = function(listing){
		console.log("controller addListingToCart found");
		Cart.addToCart(listing);
		
	}


});
app.controller('IndividualListingCtrl',function($scope){
	$scope.showCheck=function(){
		$scope.addingToCart=true;
		setTimeout(function(){
			$scope.addingToCart=false;
			$scope.$digest();
		},1000);
	}
})

// state
// url 'listingState.details/:listing'
// $stateParams
// $stateParams.listing -->