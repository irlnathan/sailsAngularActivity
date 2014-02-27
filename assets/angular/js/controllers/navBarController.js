activityApp.controller('navBarController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {

	console.log('rootScope in navbar controller:', $rootScope);
	console.log('scope in navbar controller:', $scope);

	// isAuthenticated as an argument above is just the boolean.
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
}]);