angular.module('volunteer')
.controller('memberCtrl', function( $scope, mainService, $stateParams ) {
	$scope.test = "Hello Newman";
	$scope.userId = $stateParams.id;
	$scope.userName = $stateParams.name;
	console.log ($stateParams.name);
});