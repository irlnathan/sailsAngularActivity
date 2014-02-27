

// angular.element(document).ready(function() {
//          angular.module('activityApp', []);
//          angular.bootstrap(document, ['activityApp']);
//        });


 
var activityApp = angular.module('activityApp', ['ngRoute', 'ngAnimate']);

// allows you to runs after .config but before controllers, etc.
activityApp.run(function($rootScope){

	$rootScope.isAuthenticated = false;
});

// You can always use this as a getter for the module
// console.log(test);

// activityApp.value('isAuthenticated', false);

activityApp.config(function ($routeProvider){
	$routeProvider
		.when('/signup',
			{
				controller: 'signupController',
				templateUrl: 'angular/views/signup.html'
			})
		.when('/',
			{
				templateUrl: 'angular/views/home.html'
			})
		.when('/users',
			{
				controller: 'userController',
				templateUrl: 'angular/views/users.html'
			})
		.when('/user',
			{
				controller: 'userController',
				templateUrl: 'angular/views/profile.html'
			})
		.when('/john',
			{
				controller: 'userController',
				templateUrl: 'angular/views/profile.html'
			})
		.when('/signin',
			{
				controller: 'signinController',
				templateUrl: 'angular/views/signin.html'
			})
		.when('/:userID',
			{
				controller: 'userController',
				templateUrl: 'angular/views/profile.html'
			})
		.otherwise({redirectTo: 'angular/views/index.html'});
		
});


// makes it so we dont accidently make globals.
// (function () {

// 	var test = angular.module('activityApp');
// })()