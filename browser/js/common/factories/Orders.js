app.factory('Orders', function($http,AuthService){
	return{
		getOrderById: function(id){
			return $http.get('/api/orders/'+id).then(function(response){
				console.log("here's the response: ",response); 
				return response.data;
			});
		},
		getOrderByUser:function(){
			console.log("hitting orders factory"); 
			return AuthService.getLoggedInUser().then(function(user){
				 return $http.get('/api/orders/user/'+user._id).then(function(response){
					return response.data; 
				});
			});

		},
		getBySeller:function(){
			console.log("hitting orders seller factory"); 
			return AuthService.getLoggedInUser().then(function(user){
				 return $http.get('/api/orders/seller/'+user._id).then(function(response){
					return response.data; 
				});
			});
		}
	};
})
