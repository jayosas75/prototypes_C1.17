// Create the route module and name it routeApp
var app = angular.module('routeApp', ['ngRoute']);
// Config the routes
app.config(function($routeProvider){
         // route for the home page
        $routeProvider.when('/home',{
            templateUrl: 'pages/home.html',
            controller: 'routeCtrl'
        }).when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        }).when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        }).otherwise({
            redirectTo: '#'
        });
        // route for the about page

        // route for the contact page
});

// Create the controllers for the different pages below

// home page controller
    // Create a message to display in the view
app.controller('routeCtrl', function($scope){
    $scope.message = 'HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome';
});
// about page controller
app.controller('aboutController', function($scope){
    // Create a message to display in the view
    $scope.message = 'AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout'
});
// contact page controller
app.controller('contactController', function($scope){
    $scope.message = 'CONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACT'
});
    // Create a message to display in the view
