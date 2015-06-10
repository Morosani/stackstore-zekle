app.factory('Categories', function($http){
	return{
		getAll:function(){
			return $http.get('/api/categories').then(function(response){
				console.log("getting categories"); 
				return response.data; 
			})
		}
		
	};
})