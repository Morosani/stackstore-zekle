app.config(function ($stateProvider) {
    $stateProvider.state('categoriesState', {
        url: '/categories',
        templateUrl: 'js/categories/index.html'
    });
    $stateProvider.state('categoriesState.create',{
    	url:'/create',
    	templateUrl:'/js/categories/create.html',
    	// controller:'CreateCategoryCtrl'
    });
});

// ListingsCtrl is in /js/common/directives/listings/listings.js

// app.controller('CreateCategoryCtrl', function($scope) {

// })