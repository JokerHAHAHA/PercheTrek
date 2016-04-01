// MAIN CONTROLLER
function mainController($scope, $location, $http, hikeService, userFactory) {
	$scope.auth = userFactory.isLogged;
    $scope.switchView = function(direction) {
        $location.path('/'+direction);
    };
}
