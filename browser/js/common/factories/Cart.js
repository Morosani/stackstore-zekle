app.factory('Cart',['locker' ,function(locker){
	locker.put('cart',[]);
	return {
		getCart:function(){
			console.log(locker.get('cart'));
			return locker.get('cart'); 
		},
		addToCart:function(listing){
			console.log("adding to cart");
			console.log(locker.get('cart'));
			locker.put('cart',function(current){
				current.push(listing);
				console.log(locker.get('cart'));
				return current;
			});
		}
	};
}]);