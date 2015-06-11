app.factory('Listings',function($http){
	return {
		getAll:function(){
			return $http.get('/api/listings').then(function(response){
				return response.data; 
			})
		},
		create:function(formData){
			console.log("listings factory form data: ",formData); 
			return $http.post('/api/listings/create',{category:formData.category,title:formData.title,description:formData.description,price:formData.price,qty:formData.qty}).then(function(response){
			});
		}
	}
})