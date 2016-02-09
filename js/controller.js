var app = angular.module('myApp', []);
	app.controller('visibilityCtrl', function($scope) {
		$scope.person = {
			firstName: "Archit",
			lastName: "Trivedi"
		};
		$scope.myVar = true;
		$scope.toggle = function() {
			$scope.myVar = !$scope.myVar;
		};
	});