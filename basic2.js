angular.module("dogsApp", [])

.controller("headController", function($scope) {
	$scope.general = {};
	$scope.general.title = "head for app";
})

.controller("bodyController", function($scope) {
	$scope.content = "content";
});
