angular.module('volunteer')
.controller('loginCtrl', function( $scope, mainService, $state ) {
	$scope.test = "Hello"
	
$scope.login= function(){
	mainService.getUser($scope.user).then(function(response){
		$state.go('member.myEvents', {id: response._id})
	}
	)
};	





//end
});