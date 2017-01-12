var mainApp = angular.module('mainApp', []);

mainApp.controller('petsController', function($scope) {

	// type is a model
	$scope.type = 'pet';
});

mainApp.controller('catsController', function($scope) {

	// type is a model
	$scope.type = 'cat';
});

mainApp.controller('overriddenController', function($scope) {

	// type is a model
	$scope.type = 'overriden';
});
