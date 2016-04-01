function userController($scope, $location, $http, hikeService, userService, userFactory) {

	$scope.viewCount = userFactory.isLogged ? 2 : 1;
	$scope.user = userFactory.currentUser;
	$scope.data = {};

	$scope.switchView = function(direction) {
		$location.path('/'+direction);
	};

	$scope.logOut = function() {
		$scope.viewCount = 1;
		userFactory.currentUser = {};
		userFactory.isLogged = false;
		$scope.data = {}
	}

	$scope.add = function() {

		$scope.passwordOk = 0;
		$scope.mailOk = 0;

		userService.create($scope.data).then(function(res){

			if (res.data.message) {
				if (res.data.message == "Wrong password") {
					$scope.passwordOk = 1;
					$scope.data.password = "";
				} else {
					$scope.mailOk = 1;
					$scope.data.password = "";

				}
			} else {
				userFactory.currentUser = res.data;
				userFactory.isLogged = true;
				$scope.user = userFactory.currentUser;
				$scope.viewCount = 2;
			}
		});




	}

}
