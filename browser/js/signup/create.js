app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/create.html',
        controller: 'signupController'
    });

});


app.controller('signupController', function ($scope,$window,AuthService, Signup,$state) {

    $scope.createUser = function() {
        console.log("creat user signupController"); 
        Signup.createUser($scope.SignupForm).then(function(response){
        	console.log("User creation response ",response);
            delete $scope.SignupForm;
            $state.go('home'); 

        });

    }

     $scope.googleAuth = function(){
        console.log("Authenticating with Google OAuth2");    
        $window.location.href="/auth/google"; 
    }
});

