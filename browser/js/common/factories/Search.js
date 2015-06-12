app.factory('Search', function($http) {
	return {
		submitSearch: function(category, str) {
			return $http.post('/api/search', {
					categoryId: category,
					searchStr: str
				}})
				.then(function(searchResults) {
					return searchResults;
				});
		}
	}
})