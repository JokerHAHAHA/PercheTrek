function mapController($scope, $location, $http, hikeService, mapService, uiGmapGoogleMapApi, weatherService, weatherFactory) {
    $scope.switchView = function(direction) {
        $location.path('/' + direction);
    };
    $scope.map = {
        center: {
            latitude: 40.1451,
            longitude: -99.6680
        },
        zoom: 4,
        bounds: {}
    };
    $scope.polylines = [];
    uiGmapGoogleMapApi.then(function() {
        $scope.polylines = [{
            path: [{
                latitude: 45,
                longitude: -74
            }, {
                latitude: 30,
                longitude: -89
            }, {
                latitude: 37,
                longitude: -122
            }, {
                latitude: 60,
                longitude: -95
            }]
        }];
    });
    $scope.loadWeather = function(latitude, longitude, duration) {
        weatherService.loadWeather(latitude, longitude, duration);
        $scope.weather = weatherFactory.weather[latitude.toString() + longitude.toString() + duration.toString()];
    };
	$scope.toto = true;
}
