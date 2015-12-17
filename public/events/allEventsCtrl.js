angular.module('volunteer')
.controller('allEventsCtrl', function( $scope, mainService ) {
	$scope.getEvent=function() {
		mainService.getEvent().then(function(response){
			console.log(response);
			$scope.events = response;
			})
	}();
	
});
