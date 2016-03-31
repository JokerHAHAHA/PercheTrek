function userController($scope, $location, $http, hikeService) {
    $scope.switchView = function(direction) {
        $location.path('/'+direction);
    }

	// weather api
	// document.getElementById("latitude").focus();
	// document.getElementById("longitude").focus();
	var apikey = "67086eb53fc2f16aabff20a6530f641d";

	$scope.loadWeather = function (latitude, longitude) {

		document.getElementById('weather').innerHTML = "Chargement...";

		
			// var longitude = document.getElementById('longitude').value;
			// var latitude = document.getElementById('latitude').value;
			var link = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apikey + "&units=metric";
			
			// document.getElementById('weather').innerHTML = "Chargement de la météo de " + city + "...";
			
			var request = new XMLHttpRequest();
			request.open('GET', link, false);
			request.send(null);
			
			if (request.status == 200) {
				var response = JSON.parse(request.responseText);
				debugger
				document.getElementById('weather').innerHTML =
				"Météo de " + response['name'] + " :<br />" +
				"<img src='http://openweathermap.org/img/w/" + response['weather'][0]['icon'] + ".png' style='margin-right:15px;float:left;' />" +
				"T°: " + response['main']['temp'] + "°C<br />" +
				"Min: " + response['main']['temp_min'] + "°C<br />" +
				"Max: " + response['main']['temp_max'] + "°C";
			} else {
				document.getElementById('weather').innerHTML = "Quelque chose n'a pas fonctionné.";
			}
	};
}
