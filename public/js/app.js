angular.module('app', ['ngRoute', 'ngAnimate'])
    .config(routes)
    .controller('mainController', mainController)
    .service('hikeService', hikeService);
