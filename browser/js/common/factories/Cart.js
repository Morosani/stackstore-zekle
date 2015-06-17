app.factory('Cart',['locker' ,function(locker){
	if (!locker.get('cart')) {
		locker.put('cart',[]);
	}
	return {
		getCart:function(){
			return locker.get('cart');
		},
		getTotal:function(){
			console.log("calling cart get total"); 
			var cart = locker.get('cart');
			if(!locker.get('total')){
				locker.put('total');
			}
			var total = 0.0;
			cart.forEach(function(cartItem){
				total+= (cartItem.price*cartItem.quantity);
			})
			locker.put('total',total);
			return total;
		},
		addToCart:function(listing){
			var cart = locker.get('cart');
			var exists = false; 
			cart.forEach(function(cartItem,index){
				if(cartItem['_id'] === listing._id){
					exists = true; 
					cartItem.quantity += listing.quantity;
				}
			});
			if(exists){
				locker.put('cart',cart);
			}
			if(!exists){
				locker.put('cart',function(current){
					current.push(listing);
					return current;
				});
			}
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