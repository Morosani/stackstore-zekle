app.config(function ($stateProvider) {

    $stateProvider.state('listingState', {
        url: '/listings',
        templateUrl: 'js/listings/index.html',
        controller:'SingleListingCtrl'
    });
    $stateProvider.state('listingState.create',{
    	url:'/create',
    	templateUrl:'/js/listings/create.html',
    	controller:'CreateListingCtrl'
    })
    $stateProvider.state('listingState.details',{
        url:'/details',
        templateUrl:'/js/details/detail.html',
        controller:'DetailsListingCtrl'
    })
    $stateProvider.state('listingState.details.review',{
        url:'/details/review',
        templateUrl:'/js/details/detail.html',
        controller:'DetailsListingCtrl'
    })
});

// ListingsCtrl is in /js/common/directives/listings/listings.js

app.controller('SingleListingCtrl', function($scope, AuthService){
    $scope.isLoggedIn = AuthService.isAuthenticated();
})

app.controller('CreateListingCtrl', function($scope,Listings,Categories){
    Categories.getAll().then(function(results){
        $scope.categories = results;
    });
    $scope.ListingForm
    $scope.createListing= function(){
        Listings.create($scope.ListingForm)
    }
})

app.controller('DetailsListingCtrl', function($scope, $stateParams, Listings,Categories, AuthService){
    $scope.listing = Listings.listing;
    $scope.isLoggedIn = AuthService.isAuthenticated();
})