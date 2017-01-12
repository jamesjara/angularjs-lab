var myApp = angular.module("myApp", [ 'ngRoute' ]); // need to declar ngroute

// routeProvider is in charge of the hash url
myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/showPets', {
		controller : 'PetController'
	}).when('/showHumans', {
		controller : 'HumanController'
	}).otherwise({
		redirectTo : '/undefined-lol-'
	});
} ]);

myApp.controller('PetController', function($scope) {
	$scope.pet = {
		name : 'pet'
	}
});

myApp.controller('HumanController', function($scope) {
	$scope.human = {
		name : 'human'
	}
});