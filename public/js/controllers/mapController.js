function mapController($scope, $location, $http, hikeService, mapService) {
    $scope.switchView = function(direction) {
        $location.path('/'+direction);
    }
}
