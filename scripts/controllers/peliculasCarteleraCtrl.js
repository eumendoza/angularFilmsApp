angular.module('myFilmsApp').controller('peliculasCarteleraCtrl', ['$scope', 'peliculas','$location', function($scope, peliculas,$location) {
	$scope.peliculas = peliculas.data.results;
	$scope.verDetalle = function(id) {
		return $location.path('/peliculas/detalles').search({
			idPelicula: id
		});
	};
}]);