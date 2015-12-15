angular.module('volunteer', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: './login/login.html',
			controller: 'loginCtrl'
        })
		
        .state('register', {
            url: '/register',
            templateUrl: './login/register.html',
			controller: 'registerCtrl'
        })	

		.state('member', {
            url: '/member/:id',
            templateUrl: './events/member.html',
			controller: 'memberCtrl'
        })        

        .state('member.allEvents', {
            url: '/allEvents',
            templateUrl: './events/allEvents.html',
			controller: 'allEventsCtrl'
        })
		
		.state('member.myEvents', {
            url: '/myEvents',
            templateUrl: './events/myEvents.html',
			controller: 'myEventsCtrl'
        })
		
		.state('member.createEvent', {
            url: '/createEvent',
            templateUrl: '/events/createEvent.html',
			controller: 'createEventCtrl'
        })
		
		.state('member.updateEvent', {
            url: '/updateEvent/:eventId',
            templateUrl: './events/updateEvent.html',
			controller: 'updateEventCtrl'
        })
		
		.state('main', {
            url: '/main',
            templateUrl: './main.html',
			controller: 'mainCtrl'
        })




//end
});
