angular.module('timber')
.controller('mainCtrl', function( $scope, $http ) {

	$scope.getProvider = function() {
		$http.get('/provider').then(function( response ) {
			$scope.providers = response.data;
		});
	}
	$scope.getProvider();

	$scope.addNewProvider = function( provider ) {
		$http.post('/provider', provider).then(function( response ) {
			$scope.providers = response.data;
		});
	}

	$scope.deleteProvider = function( providerId ) {
		$http.delete('/Provider?id=' + providerId).then(function( response ) {
			$scope.getProvider();
		});
	}

	$scope.getOneProvider = function( providerId ) {
		$http.get('/good/one/' + providerId)
	}

	// $scope.provider = $http({
	// 	method: 'GET',
	// 	url: '/api/provider'
	// }).then(function( response ) {
	// 	return response.data;
	// });

	// $scope.provider = $http({
	// 	method: 'POST',
	// 	url: '/api/provider',
	// 	data: provider
	// }).then(function( response ) {
	// 	return response.data;
	// });
});