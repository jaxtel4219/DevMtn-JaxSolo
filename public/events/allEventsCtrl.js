angular.module('volunteer')
.controller('allEventsCtrl', function( $scope, mainService ) {
	$scope.test = "Hello"
	
	$scope.getEvent=function() {
		mainService.getEvent().then(function(response){
			console.log(response);
			$scope.events = response;
			})
	}();
	
});
