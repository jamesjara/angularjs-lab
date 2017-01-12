var module = angular.module("myApp", []);

module.service("userService", function() {
	// we use THIS inside services
	this.users = [ 'elon', 'mozart' ];
});
