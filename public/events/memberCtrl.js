angular.module('volunteer')
.controller('memberCtrl', function( $scope, mainService, $stateParams ) {
	$scope.test = "Hello";
	$scope.userId = $stateParams.id;
	
});