app.factory('Cart',['locker' ,function(locker){
	// locker.put('cart',[]);
	return {
		getCart:function(){
			return locker.get('cart'); 
		},
		getTotal:function(){
			return locker.get('total'); 
		},
		addToCart:function(listing){
			locker.put('cart',function(current){
				current.push(listing);
				return current;
			});
		},
		remove: function(id){
			var cart = locker.get('cart'); 
			cart.forEach(function(listing,index){
				if(listing['_id'] === id){
					cart.splice(index,1);
				}
			});
			locker.put('cart',cart);
			return cart; 
		},
		updateQty:function(id,qty){
			var cart = locker.get('cart'); 
			cart.forEach(function(listing){
				if(listing['_id'] === id){
					listing.quantity=qty;
				}
			});
			locker.put('cart',cart); 
			return cart;
		},
		emptyCart:function(){
			locker.put('cart',[]);
		}
	};
}]);