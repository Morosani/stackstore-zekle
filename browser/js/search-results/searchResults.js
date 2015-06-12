app.config(function($stateProvider) {
    $stateProvider.state('searchState', {
        url: '/search',
        templateUrl: 'js/search-results/searchResults.html',
        controller:'SearchResultsCtrl'
    });
});

app.controller('SearchResultsCtrl', function($scope, $state, $stateParams, Search){
    console.log('these are stateParams: ',$stateParams);
    // $scope.listings = $stateParams;
});