app.config(function ($stateProvider) {
    $stateProvider.state('listingState', {
        url: '/listings',
        templateUrl: 'js/listings/index.html'
    });
    $stateProvider.state('listingState.create',{
    	url:'/create',
    	templateUrl:'/js/listings/create.html',
    	controller:'CreateListingCtrl'
    })
});

// ListingsCtrl is in /js/common/directives/listings/listings.js

app.controller('CreateListingCtrl', function($scope,Listings,Categories){   
    Categories.getAll().then(function(results){
        $scope.categories = results;
    });
    $scope.ListingForm
    $scope.createListing= function(){
        Listings.create($scope.ListingForm)
    }

})