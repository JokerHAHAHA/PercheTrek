function mapController($scope, $location, $http, hikeService, mapService,uiGmapGoogleMapApi) {
	$scope.map = { center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
	$scope.polylines = [];
	uiGmapGoogleMapApi.then(function(){
		$scope.polylines = [
			{	
				path: [
					{
						latitude: 45,
						longitude: -74
					},
					{
						latitude: 30,
						longitude: -89
					},
					{
						latitude: 37,
						longitude: -122
					},
					{
						latitude: 60,
						longitude: -95
					}
				]
			}
		]});
}





