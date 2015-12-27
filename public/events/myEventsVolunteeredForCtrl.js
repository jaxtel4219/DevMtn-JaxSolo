angular.module('volunteer')
.controller('myEventsVolunteeredForCtrl', function( $scope, mainService, $stateParams ) {
	$scope.userId = $stateParams.id;
	$scope.getEventsVolunteeredFor = function(){
		console.log("id: ", $scope.userId);
		mainService.getEventsVolunteeredFor($scope.userId).then(function(response){
			console.log(response);
			$scope.events=response;
		})
	}();
		
		
//end		
});

