angular.module('myFilmsApp').controller('peliculasCarteleraCtrl', ['$scope', 'ApiService', function($scope, ApiService) {
	ApiService
		.consultaApi('movie/now_playing')
		.then(
			function(response) {
				$scope.peliculas = response.data.results;
			},
			function() {
				console.log('No se ha podido recopilar la información');
			}
		);

}]);