var mainApp = angular.module("mainApp", []);

mainApp.controller('petsController', function($scope) {
	$scope.pet = {
		type : 'dog',
		age : 15,
		price : 3000,
		info : function() {
			var data;
			data = $scope.pet;
			return data.type + ' age:' + data.age;
		}
	}
});