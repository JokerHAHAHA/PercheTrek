function mapController($scope, $location, $http, hikeService) {
    $scope.switchView = function(direction) {
        $location.path('/'+direction);
    }
}
