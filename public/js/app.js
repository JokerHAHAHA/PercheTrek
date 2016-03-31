angular.module('app', ['ngRoute', 'ngAnimate', 'uiGmapgoogle-maps'])
	.config(routes)
	.controller('mainController', mainController)
	.controller('hikingController', hikingController)
	.controller('bikingController', bikingController)
	.controller('mapController', mapController)
	.controller('userController', userController)
	.service('hikeService', hikeService)
    .service('weatherService', weatherService)
    .factory('weatherFactory', weatherFactory)
	.service('mapService', mapService)
	.config(function(uiGmapGoogleMapApiProvider) {
		uiGmapGoogleMapApiProvider.configure({
			libraries: 'weather,geometry,visualization'
		});
	});
