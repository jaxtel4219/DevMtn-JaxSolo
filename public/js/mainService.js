angular.module('volunteer')	
.service('mainService', function( $http ) {


////User
	this.getUser = function() {
		return $http.get('/api/user').then(function( response ) {
			return response.data;
		});		
	}

	this.addNewUser = function(user) {
		// console.log("servcie", user);
		return $http.post('/api/user', user).then(function( response ) {
			return response.data;
		});		
	}

	// this.getReview = function( userId, reviewId ) {
	// 	$http.get('/api/user/review?userId=' + userId + '&reviewId=' + reviewId)
	// 		.then(function( response ) {
	// 			return response.data;
	// 	});
	// } 

	this.udpateUser = function( id ) { 
		// console.log("mainService userId: ", id);
		return $http.put('/api/user/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}


	this.deleteUser = function( id ) { //changed userId to id here and on line of $http.delete request
		// console.log("mainService userId: ", id);
		return $http.delete('/api/user/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}



////Event
	this.getEvent = function() {
		return $http.get('/api/event').then(function( response ) {
			return response.data;
		});		
	}

	this.addNewEvent = function(event) {
		// console.log("servcie", event);
		return $http.post('/api/event', event).then(function( response ) {
			return response.data;
		});		
	}

	// this.getReview = function( eventId, reviewId ) {
	// 	$http.get('/api/event/review?eventId=' + eventId + '&reviewId=' + reviewId)
	// 		.then(function( response ) {
	// 			return response.data;
	// 	});
	// } 

	this.udpateEvent = function( id ) { 
		// console.log("mainService eventId: ", id);
		return $http.put('/api/event/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}


	this.deleteEvent = function( id ) { //changed eventId to id here and on line of $http.delete request
		// console.log("mainService eventId: ", id);
		return $http.delete('/api/event/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}



////Organizer
	this.getOrganizer = function() {
		return $http.get('/api/organizer').then(function( response ) {
			return response.data;
		});		
	}

	this.addNewOrganizer = function(organizer) {
		// console.log("servcie", organizer);
		return $http.post('/api/organizer', organizer).then(function( response ) {
			return response.data;
		});		
	}

	// this.getReview = function( organizerId, reviewId ) {
	// 	$http.get('/api/organizer/review?organizerId=' + organizerId + '&reviewId=' + reviewId)
	// 		.then(function( response ) {
	// 			return response.data;
	// 	});
	// } 

	this.udpateOrganizer = function( id ) { 
		// console.log("mainService organizerId: ", id);
		return $http.put('/api/organizer/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}


	this.deleteOrganizer = function( id ) { //changed organizerId to id here and on line of $http.delete request
		// console.log("mainService organizerId: ", id);
		return $http.delete('/api/organizer/' + id).then(function( response ) {
			console.log(response);
			return response.data;
		});
	}


});