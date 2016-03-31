angular.module('app', ['ngRoute', 'ngAnimate', 'uiGmapgoogle-maps'])
    .config(routes)
    .controller('mainController', mainController)
    .controller('hikingController', hikingController)
    .controller('bikingController', bikingController)
    .controller('mapController', mapController)
    .controller('userController', userController)
    .service('hikeService', hikeService)
    .service('mapService', mapService);
