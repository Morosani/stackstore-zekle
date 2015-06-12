app.directive('search', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: 'SearchCtrl',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/js/common/directives/search/search.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	};
});


app.controller('SearchCtrl',function($scope, $state, Categories,Search){
	$scope.categories;
	Categories.getAll().then(function(data){
		console.log("Search controller getting categories");
		$scope.categories= data;
	})
	$scope.search;


	$scope.fireSearch = function(){
		console.log('firing search');
		Search.submitSearch($scope.search.category,$scope.search.input).then(function (results){
			$scope.searchResults = results;
			console.log('these are search results: ', results)
			$state.go('searchState', results);
		});
	}
})