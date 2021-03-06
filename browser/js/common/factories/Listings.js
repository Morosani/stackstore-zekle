
app.factory('Listings',function($http,AuthService){
		var listingID = '';

	return {
		getAll:function(){
			return $http.get('/api/listings').then(function(response){
				return response.data;
			})
		},
		createListing:function(formData){
			// console.log("listings factory form data: ",formData);
			return $http.post('/api/listings/create',{
				category:formData.category,
				title:formData.title,
				description:formData.description,
				price:formData.price,
				quantity:formData.quantity
			}).then(function(response){
				return response.data
			})
		},
		getOne:function(id){
			return $http.get('/api/listings/' + id).then(function(response) {
				listingID= id;
				return response.data;
			})
		},
		getObjectId:function(listing){
			return listing._id;
		},
		getBySeller:function(){
			return AuthService.getLoggedInUser().then(function(user){
				 return $http.get('/api/listings/user/'+user._id).then(function(response){
					return response.data; 
				});
			});

		},

		deleteListing:function(id){
			return $http.delete('/api/listings/' + id).then(function(response){
				console.log('listing deleted')
			})
		},

		getEditListingID: function() {
			return listingID;
		},
		updateListing:function(formData){
			console.log('forrmmmD', formData);
			return $http.post('api/listings/update', {
				_id: listingID,
				category: formData.category,
				title:formData.title,
				description:formData.description,
				price:formData.price,
				quantity:formData.quantity
			}).then(function(response){
				return response.data
			})
		}
		//editListing:function(id, formData) {
		//	return $http.post('api/listings' + id).then(function(response){
		//		return response.data
		//	})
		//}
	}
})

