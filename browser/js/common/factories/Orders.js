app.factory('Orders', function($http){
	return{
		getOrderById: function(id){
			console.log("getOrderById factory"); 
			return $http.get('/api/orders/'+id).then(function(response){
				console.log("here's the response: ",response); 
				return response.data;
			});
		}
	};
})
