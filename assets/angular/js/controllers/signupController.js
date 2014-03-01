angular.module('activityApp').controller('signupController', function($scope, $http, $q, $routeParams, $location){

	$scope.createUser = function() {

		var deferred = $q.defer();	
	
		var baseUrl = '';
        
        var url = baseUrl +  '/user';

        // console.log($scope.user);

        // $http.get(url).success(deferred.resolve).error(deferred.reject);

        $http.post(url, $scope.user).success(deferred.resolve).error(deferred.reject)
        	.then(function (result) {
				console.log("This is the result: ", result);
				var userId = result.data.id
				$location.path( "/" + userId );
			}, function (error) {
				console.log("This is the error: ", error);
				$scope.toggle = true;
				$scope.error = error;
			});

        // $scope.toggle = "true";
        //     return deferred.promise;
        // };
    }
});