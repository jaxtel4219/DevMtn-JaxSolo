angular.module('volunteer')
.controller('memberCtrl', function( $scope, mainService, $stateParams ) {
	// $scope.test = "Hello Newman";
	$scope.userId = $stateParams.id;
});