angular.module('volunteer')
.controller('myEventsCtrl', function( $scope, mainService, $stateParams ) {
	
	$scope.userId = $stateParams.id;
	$scope.getEventsCreatedById = function(){
		mainService.getEventsCreatedById($scope.userId).then(function(response){
			console.log(response);
			$scope.events=response;
		})
	}();
		
		
		
});