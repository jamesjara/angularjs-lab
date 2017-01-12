myApp.controller("ajaxController", function($scope, $https){
	var url = "/ajax_response.txt";
	$https.get(url).success(function(response){
		$scope.response = response;
	})
});
