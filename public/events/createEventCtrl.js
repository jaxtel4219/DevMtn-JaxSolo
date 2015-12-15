angular.module('volunteer')
.controller('createEventCtrl', function( $scope, mainService, $stateParams ) {
	$scope.createEvent = function() {
		$scope.event.createdBy = $stateParams.id;
		mainService.createEvent($scope.event).then(function(response){
			console.log(response);
		})
	} 
	
});