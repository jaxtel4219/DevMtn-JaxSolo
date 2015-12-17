angular.module('volunteer')
.controller('registerCtrl', function( $scope, mainService, $state ) {
	// $scope.test = "Hello"


$scope.register= function(){
	mainService.addNewUser($scope.user).then(function(response){
			$state.go('member.myEvents', {id: response._id})
	}
	)
};







//end
});


