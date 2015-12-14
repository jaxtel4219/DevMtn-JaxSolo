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

        .state('allEvents', {
            url: '/allEvents',
            templateUrl: './events/allEvents.html',
			controller: 'allEventsCtrl'
        })
		
		.state('myEvents', {
            url: '/myEvents/:id',
            templateUrl: './events/myEvents.html',
			controller: 'myEventsCtrl'
        })
		
		.state('createEvent', {
            url: '/createEvent',
            templateUrl: '/events/createEvent.html',
			controller: 'createEventCtrl'
        })
		
		.state('updateEvent', {
            url: '/updateEvent',
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
