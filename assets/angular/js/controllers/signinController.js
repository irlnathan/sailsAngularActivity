activityApp.controller('signinController', function($rootScope, $scope, $http, $q, $routeParams, $location){
	// console.log('root in signin', $rootScope);
	// console.log('scope in signin', $scope);
	console.log('scope', $scope);

	$scope.signInUser = function() {

		console.log("These are the params: ", $routeParams);

		var deferred = $q.defer();	
	
		var baseUrl = '';
        
        var url = baseUrl +  '/session/create';

		// $rootScope.isAuthenticated = false;

        // $http.get(url).success(deferred.resolve).error(deferred.reject);

        console.log('session obj', $scope.session);

        $http.post(url, $scope.session).success(deferred.resolve).error(deferred.reject)
        	.then(function (result) {

        		console.log("made it")

        		// If successful go ahead and tell the front-end you're authenticated for the purposes of displaying the ui.
        		$rootScope.isAuthenticated = true;
				// console.log("This is the result: ", result);
				// console.log("This is the id: ", result.data.id);
				var userId = result.data.id;
				$location.path( "/" + userId );
			}, function (error) {
				// console.log("This is the error: ", error);
				$scope.toggle = true;
				$scope.error = error;

				console.log("The error: ", error);
			});

        // $scope.toggle = "true";
        //     return deferred.promise;
        // };
    }

    $scope.signOutUser = function() {

    	console.log("I'm here!!!!");
    	var deferred = $q.defer();

    	var baseUrl = '';

    	var url = baseUrl + '/session/destroy';

    	$http.delete(url).success(deferred.resolve).error(deferred.reject)
        	.then(function (result) {

        		// If successful go ahead and tell the front-end you're logged-out for the purposes of displaying the ui.
        		$rootScope.isAuthenticated = false;
				// $location.path( "/");
			}, function (error) {
				// console.log("This is the error: ", error);
				$scope.toggle = true;
				$scope.error = error;
			});
    }
});