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
		
		
		
});