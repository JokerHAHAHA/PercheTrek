angular.module('app', ['ngRoute', 'ngAnimate'])
    .config(routes)
    .controller('mainController', mainController)
    .controller('hikingController', mainController)
    .controller('bikingController', mainController)
    .controller('mapController', mainController)
    .controller('userController', mainController)
    .service('hikeService', hikeService);
