angular.module('volunteer')
.controller('thisEventCtrl', function( $scope, mainService, $stateParams ) { //$stateParams here = object user and then event id's
	
	console.log("jax stateparams line 4:" , $stateParams);
	$scope.eventId = $stateParams.eventId;
	
    $scope.getThisEvent = function(){
		mainService.getThisEvent($scope.eventId).then(function(response){
			console.log(response);
			$scope.event=response;
		})
	}();
		
	$scope.udpateEventVolunteers = function() {
		var volunteer = {
			userId: $stateParams.id,
			status: "New"
		} 
		mainService.udpateEventVolunteers($scope.eventId, volunteer).then(function(response){
			console.log("updated volunteer response: ", response);
			$scope.event=response;
		})
	};
	
    $scope.deleteThisEvent = function(){
		mainService.deleteEvent($scope.eventId).then(function(response){
			console.log(response);
			$scope.event=response;
		})
	};

	
		
		
});