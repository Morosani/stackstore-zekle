app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/create.html',
        controller: 'signupController'
    });

});


app.controller('signupController', function ($scope, Signup) {

    $scope.registrationForm
    $scope.createUser = function() {
        User.create($scope.registrationForm)
    }
});

