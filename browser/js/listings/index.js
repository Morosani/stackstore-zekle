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
        url:'/:id',
        templateUrl:'/js/listings/detail.html',
        controller:'DetailsListingCtrl'
    })
    $stateProvider.state('listingState.details.review',{
        url:'/review',
        templateUrl:'/js/listings/review.html',
        controller:'ReviewListingCtrl'
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
    Listings.getOne($stateParams.id).then(function(response) {
        $scope.listing = response;
    });
    $scope.isLoggedIn = AuthService.isAuthenticated();
    // $scope.changeState = $state.go('listingState.details.review');
})

app.controller('ReviewListingCtrl', function($scope, $stateParams, Listings, Categories, Review, AuthService){
    // $scope.reviewForm;
    $scope.isLoggedIn = AuthService.isAuthenticated();
    AuthService.getLoggedInUser().then(function(user) {
        $scope.reviewForm.user = user._id;
        console.log('this mah user yo: ', $scope.reviewForm.user);
    });
    $scope.createReview = function(){
        // console.log('HELLOOWOEWFJEFWEWOJ?!?!?!?!?!')
        Review.createReview($scope.reviewForm)
        .then(function(review) {
            console.log("Created review: ", review);
        })
    }
})