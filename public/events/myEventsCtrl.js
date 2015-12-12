angular.module('volunteer')
.controller('myEventsCtrl', function( $scope, mainService, $stateParams ) {
	$scope.test = "Hello";
	$scope.userId = $stateParams.id;
	
});