app.factory('Search', function($http) {
	return {
		submitSearch: function(category, str) {
			return $http.get('/api/search', {params: {
					category: category,
					searchStr: str
				}})
				.then(function(searchResults) {
					return searchResults;
				});
		}
	}
})