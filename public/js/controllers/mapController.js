function mapController($scope, $location, $http, hikeService, mapService, uiGmapGoogleMapApi, weatherService, weatherFactory, userFactory, mapFactory) {
    $scope.switchView = function(direction) {
        $location.path('/' + direction);
    };
    $scope.toto = (mapFactory.currentTrek !== '');
    $scope.bikes = [{
        "name": "Le Pas-de-Nom",
        "length": 49600,
        "duration": 10188,
        "geo": {
            "latitude": 48.5161884,
            "longitude": 1.0160544
        },
        "geos": [{
            "latitude": 48.5161884,
            "longitude": 1.0160544,
            "name": "Début",
            "duration": 10188,
            "length": 4960
        }, {
            "latitude": 48.5336956,
            "longitude": 0.9326592,
            "name": "Etape 1",
            "duration": 1140,
            "length": 600
        }, {
            "latitude": 48.5180066,
            "longitude": 0.788807,
            "name": "Etape 2",
            "duration": 2520,
            "length": 1290
        }, {
            "latitude": 48.4779663,
            "longitude": 0.8413354,
            "name": "Etape 3",
            "duration": 4800,
            "length": 2460
        }, {
            "latitude": 48.4348967,
            "longitude": 0.898152,
            "name": "Etape 4",
            "duration": 6060,
            "length": 3100
        }, {
            "latitude": 48.4709105,
            "longitude": 1.0150567,
            "name": "Etape 5",
            "duration": 7740,
            "length": 3920
        }, {
            "latitude": 48.4953741,
            "longitude": 0.8651963,
            "name": "Etape 6",
            "duration": 10188,
            "length": 4960
        }, {
            "latitude": 48.5161884,
            "longitude": 1.0160544,
            "name": "Fin",
            "duration": 10188,
            "length": 4960
        }]
    }];
    $scope.hikes = [{
        "name": "5km à pieds",
        "length": 6100,
        "duration": 4380,
        "geo": {
            "latitude": 48.5998043,
            "longitude": 1.0947197
        },
        "geos": [{
            "latitude": 48.5998043,
            "longitude": 1.0947197,
            "name": "Début",
            "duration": 1140,
            "length": 600
        }, {
            "latitude": 48.5922889,
            "longitude": 1.1043131,
            "name": "Etape 1",
            "duration": 1100,
            "length": 780
        }, {
            "latitude": 48.5887709,
            "longitude": 1.1322974,
            "name": "Etape 2",
            "duration": 4200,
            "length": 3060
        }, {
            "latitude": 48.6039314,
            "longitude": 1.1403436,
            "name": "Etape 3",
            "duration": 5200,
            "length": 3600
        }, {
            "latitude": 48.5998043,
            "longitude": 1.0947197,
            "name": "Fin",
            "duration": 6100,
            "length": 4380
        }]
    }];
    $scope.type = mapFactory.type;
    $scope.parcours = $scope.type == 'hike' ? $scope.hikes[0] : $scope.bikes[0];
    $scope.zoom = $scope.type == 'hike' ? 12 : 10;
    $scope.map = {
        center: $scope.parcours.geo,
        zoom: $scope.zoom,
        bounds: {}
    };
    $scope.polylines = [];
    uiGmapGoogleMapApi.then(function() {
        $scope.polylines = [{
            path: $scope.parcours.geos
        }];
    });
    $scope.loadWeather = function(latitude, longitude, duration) {
        weatherService.loadWeather(latitude, longitude, duration);
        $scope.weather = weatherFactory.weather[latitude.toString() + longitude.toString() + duration.toString()];
        return $scope.weather;
    };
}
