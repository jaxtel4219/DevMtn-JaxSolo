angular.module('volunteer')	
.service('mainService', function( $http ) {


////User
	this.getUser = function(user) {
		//using post here as a "get""
		return $http.post('/api/getUser', user).then(function( response ) {
			return response.data[0];
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

	this.getEventsCreatedById = function(userId) {
		return $http.get('/api/event/createdBy/'+ userId).then(function( response ) {
			return response.data;
		});		
	}

	this.createEvent = function(event) {
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

	this.udpateEventVolunteers = function( id, volunteer ) { 
		// console.log("mainService eventId: ", id);
		return $http.put('/api/event/volunteers' + id, volunteer).then(function( response ) {
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


});