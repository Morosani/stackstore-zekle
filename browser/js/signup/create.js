app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/createCategory.html',
        controller: 'signupController'
    });

});


app.controller('signupController', function ($scope,$window,AuthService, Signup) {

    $scope.createUser = function() {
        Signup.createUser($scope.SignupForm).then(function(response){
        	console.log("User creation response ",response);
            delete $scope.SignupForm;
        });

    }

     $scope.googleAuth = function(){
        console.log("Authenticating with Google OAuth2");    
        $window.location.href="/auth/google"; 
    }
});

