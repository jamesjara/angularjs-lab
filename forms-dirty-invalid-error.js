var mainApp = angular.module("mainApp", []);

mainApp.controller('petsController', function($scope) {
	$scope.pet = {
		type : 'dog',
		age : 15,
		info : function() {
			var data;
			data = $scope.pet;
			return data.type + ' age:' + data.age;
		}
	}

	$scope.submit = function() {
		alert("submit");
	}
});