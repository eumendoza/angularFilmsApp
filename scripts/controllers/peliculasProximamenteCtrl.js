angular.module('myFilmsApp').controller('peliculasProximamenteCtrl', ['$scope', 'ApiService', function($scope, ApiService) {
	ApiService
		.consultaApi('movie/upcoming')
		.then(
			function(response) {
				$scope.peliculas = response.data.results;
			},
			function() {
				console.log('No se ha podido recopilar la información');
			}
		);
}]);