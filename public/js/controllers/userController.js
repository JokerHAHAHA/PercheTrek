function userController($scope, $location, $http, hikeService) {

		$scope.viewCount = 2;

	$scope.switchView = function(direction) {
		$location.path('/'+direction);
	};



}
