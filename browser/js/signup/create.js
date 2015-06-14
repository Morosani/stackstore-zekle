app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/create.html',
        controller: 'signupController'
    });

});


app.controller('signupController', function ($scope,$window,AuthService, Signup) {

    $scope.SignupForm;
    $scope.createUser = function() {
    	console.log("called create user");
        Signup.createUser($scope.SignupForm).then(response){
        	console.log("User creation response ",response);
        };
    }
     $scope.googleAuth = function(){
        console.log("Authenticating with Google OAuth2");    
        $window.location.href="/auth/google"; 
    }
});

