app.factory('Listings',function($http){
	return {
		getAll:function(){
			return $http.get('/api/listings').then(function(response){
				return response.data; 
			})
		}
	}
})