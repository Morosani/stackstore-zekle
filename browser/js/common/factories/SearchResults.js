app.factory('SearchResults', function(){
	var searchResults = []; 
	return{
		setResults:function(data){
			console.log("search results factory, settingResults")
			searchResults = data; 

		},
		getResults:function () {
			console.log("search results factory, gettingResults")
			return searchResults ? "no data":searchResults; 
		}
	}
})