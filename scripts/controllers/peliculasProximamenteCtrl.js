angular.module('myFilmsApp').controller('peliculasProximamenteCtrl', ['$scope', 'ApiService','$filter', function($scope, ApiService,$filter) {
	ApiService
		.consultaApi('movie/upcoming')
		.then(
			function(response) {
				$scope.peliculas = $filter('orderBy')(response.data.results,['release_date','title']);
			},
			function() {
				console.log('No se ha podido recopilar la información');
			}
		);
}]);