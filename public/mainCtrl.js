// angular.module('volunteer')
// .controller('mainCtrl', function( $scope, mainService ) {



// ////User
// 	$scope.getUser = function() {
// 		mainService.getUser().then( function (response) {
// 			$scope.users = response;	
// 		})
// 	}

// 	$scope.addNewUser = function (user) {
// 		console.log("controller", user);
// 		mainService.addNewUser(user).then(function (response) {
// 			console.log (response);
// 			$scope.getUser();
// 		})
// 	}

// 	// $scope.getReview = function( UserId, reviewId ) {
		
// 	// 	mainService.getReview(UserId, reviewId ).then(function (response) {
// 	// 		console.log (response);
// 	// 		$scope.selectedReview = response.data;
// 	// 	})
// 	// }
	
// 	$scope.updateUser = function( id ) {
// 		console.log("mainCtrl userId: ", id);
// 		mainService.updateUser(id).then(function (response) {
// 			$scope.getUser();
// 		})

// 	}
	
// 	$scope.deleteUser = function( id ) {
// 		console.log("mainCtrl userId: ", id);
// 		mainService.deleteUser(id).then(function (response) {
// 			$scope.getUser();
// 		})
		
// 	}
// 	// $scope.getUser();	
	
// ////Event
// 	$scope.getEvent = function() {
// 		mainService.getEvent().then( function (response) {
// 			$scope.events = response;	
// 		})
// 	}

// 	$scope.addNewEvent = function (event) {
// 		console.log("controller", event);
// 		mainService.addNewEvent(event).then(function (response) {
// 			console.log (response);
// 			$scope.getEvent();
// 		})
// 	}
	
// 	$scope.updateEvent = function( id ) {
// 		console.log("mainCtrl eventId: ", id);
// 		mainService.updateEvent(id).then(function (response) {
// 			$scope.getEvent();
// 		})

// 	}
	
// 	$scope.deleteEvent = function( id ) {
// 		console.log("mainCtrl eventId: ", id);
// 		mainService.deleteEvent(id).then(function (response) {
// 			$scope.getEvent();
// 		})
		
// 	}
// 	$scope.getEvent();
	
// })

