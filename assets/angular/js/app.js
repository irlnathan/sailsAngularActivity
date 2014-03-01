// // This is local copies of the globals
// (function(angular){

// 	// So now activityApp is local to this function and not global
// 	var activityApp = angular.module('activityApp', ['ngRoute', 'ngAnimate']);

// 	// Put all of the code below here if you want to use it.

// 	var a;

// 	...

// 	window.

// 	if (a === undefined)



// // These are passed in globals
// })(angular);


// (function (angular) {

// })(angular);

// angular.element(document).ready(function() {
//          angular.module('activityApp', []);
//          angular.bootstrap(document, ['activityApp']);
//        });

// var activityApp = angular.module('activityApp', ['ngRoute', 'ngAnimate']);

angular.module('activityApp', ['ngRoute', 'ngAnimate']);

// allows you to runs after .config but before controllers, etc.
angular.module('activityApp').run(function($rootScope, $http, $q){

	$rootScope.isAuthenticated = false;

	var deferred = $q.defer();	
	
	var baseUrl = '';
        
    var url = baseUrl +  '/session/isAuthenticated';

    $rootScope.loading=true;

	$rootScope.isAuthenticated = $http.get(url).success(deferred.resolve).error(deferred.reject)
        	.then(function (result) {

        		$rootScope.loading=false;

        		console.log(result);
        		// If successful go ahead and tell the front-end you're logged-out for the purposes of displaying the ui.
        		$rootScope.isAuthenticated = result.data.authenticated;
				// $location.path( "/");
			}, function (error) {
				// console.log("This is the error: ", error);
				console.log(error);
			});
});

// You can always use this as a getter for the module
// console.log(test);

// activityApp.value('isAuthenticated', false);

angular.module('activityApp').config(function ($routeProvider){
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