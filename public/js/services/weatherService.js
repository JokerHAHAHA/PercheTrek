function weatherService($http, weatherFactory) {
	return {
		apikey : "67086eb53fc2f16aabff20a6530f641d",

		loadWeather : function(latitude, longitude, duration){
			if(!weatherFactory.weather[latitude.toString()+longitude.toString()+duration.toString()]) {
				$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latitude + "&lon=" + longitude + "&cnt=" + duration + "&mode=json&appid=" + this.apikey + "&units=metric").then(function(response) {
					response = response.data;
					weatherFactory.weather[latitude.toString()+longitude.toString()+duration.toString()] = {
						"latitude" : latitude,
						"longitude" : longitude,
						"duration" : duration,
						"location" : response.city.name,
						"date" : response.list[0].dt,
						"tempMin" : response.list[0].temp.min,
						"tempMax" : response.list[0].temp.max,
						"imSrc" : "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png",
						"tempMorning" : response.list[0].temp.morn,
						"tempEvening" : response.list[0].temp.eve,
					};
				});
			}
		}
	};
}