function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        .when('/hiking', {
            templateUrl: 'views/hiking.html',
            controller: 'hikingController'
        })
        .when('/biking', {
            templateUrl: 'views/biking.html',
            controller: 'bikingController'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController'
        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        });
}
