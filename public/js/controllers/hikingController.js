function hikingController($scope, $location, $http, hikeService, weatherService, weatherFactory) {
    $scope.switchView = function(direction) {
        $location.path('/'+direction);
<<<<<<< HEAD
    };
=======
    }
    $scope.loadWeather = function(latitude, longitude, duration){
		weatherService.loadWeather(latitude, longitude, duration);
		$scope.weather = weatherFactory.weather[latitude.toString()+longitude.toString()+duration.toString()];
	}
>>>>>>> weather finished
}
