angular.module('myFilmsApp').controller('peliculasProximamenteCtrl', ['$scope', '$filter', 'peliculas', '$location', function($scope, $filter, peliculas, $location) {
	$scope.peliculas = $filter('orderBy')(peliculas.data.results, ['release_date', 'title']);
	$scope.verDetalle = function(id) {
		return $location.path('/peliculas/detalles').search({
			idPelicula: id
		});
	};
}]);