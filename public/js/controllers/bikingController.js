function bikingController($scope, $location, $http, hikeService, weatherService, weatherFactory, userFactory, mapFactory) {
    $scope.switchView = function(direction) {
        $location.path('/' + direction);
    };
    $scope.setTrek = function(trek) {
        mapFactory.currentTrek = trek;
        mapFactory.type = 'bike';
        $scope.switchView('map');
    }
    $scope.loadWeather = function(latitude, longitude, duration) {
        weatherService.loadWeather(latitude, longitude, duration);
        $scope.weather = weatherFactory.weather[latitude.toString() + longitude.toString() + duration.toString()];
    };
}
