angular.module('volunteer')
.controller('mainCtrl', function( $scope, mainService ) {



////User
	$scope.getUser = function() {
		mainService.getUser().then( function (response) {
			$scope.users = response;	
		})
	}
	$scope.getUser();

	$scope.addNewUser = function (user) {
		console.log("controller", user);
		mainService.addNewUser(user).then(function (response) {
			console.log (response);
			$scope.getUser();
		})
	}

	// $scope.getReview = function( UserId, reviewId ) {
		
	// 	mainService.getReview(UserId, reviewId ).then(function (response) {
	// 		console.log (response);
	// 		$scope.selectedReview = response.data;
	// 	})
	// }
	
	$scope.updateUser = function( id ) {
		console.log("mainCtrl userId: ", id);
		mainService.updateUser(id).then(function (response) {
			$scope.getUser();
		})

	}
	
	$scope.deleteUser = function( id ) {
		console.log("mainCtrl userId: ", id);
		mainService.deleteUser(id).then(function (response) {
			$scope.getUser();
		})
		
	}
	
	
////Event
	$scope.getEvent = function() {
		mainService.getEvent().then( function (response) {
			$scope.events = response;	
		})
	}

	$scope.addNewEvent = function (event) {
		console.log("controller", event);
		mainService.addNewEvent(event).then(function (response) {
			console.log (response);
			$scope.getEvent();
		})
	}

	// $scope.getReview = function( EventId, reviewId ) {
		
	// 	mainService.getReview(EventId, reviewId ).then(function (response) {
	// 		console.log (response);
	// 		$scope.selectedReview = response.data;
	// 	})
	// }
	
	$scope.updateEvent = function( id ) {
		console.log("mainCtrl eventId: ", id);
		mainService.updateEvent(id).then(function (response) {
			$scope.getEvent();
		})

	}
	$scope.getEvent();
	
	$scope.deleteEvent = function( id ) {
		console.log("mainCtrl eventId: ", id);
		mainService.deleteEvent(id).then(function (response) {
			$scope.getEvent();
		})
		
	}
	$scope.getEvent();
	
	
	
////Organizer
	$scope.getOrganizer = function() {
		mainService.getOrganizer().then( function (response) {
			$scope.organizers = response;	
		})
	}

	$scope.addNewOrganizer = function (organizer) {
		console.log("controller", organizer);
		mainService.addNewOrganizer(organizer).then(function (response) {
			console.log (response);
			$scope.getOrganizer();
		})
	}

	// $scope.getReview = function( OrganizerId, reviewId ) {
		
	// 	mainService.getReview(OrganizerId, reviewId ).then(function (response) {
	// 		console.log (response);
	// 		$scope.selectedReview = response.data;
	// 	})
	// }
	
	$scope.updateOrganizer = function( id ) {
		console.log("mainCtrl organizerId: ", id);
		mainService.updateOrganizer(id).then(function (response) {
			$scope.getOrganizer();
		})

	}
	$scope.getOrganizer();
	
	$scope.deleteOrganizer = function( id ) {
		console.log("mainCtrl organizerId: ", id);
		mainService.deleteOrganizer(id).then(function (response) {
			$scope.getOrganizer();
		})
		
	}
	$scope.getOrganizer();
	
	
	
	
	
	
	
})

