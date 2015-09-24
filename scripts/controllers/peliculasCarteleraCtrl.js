angular.module('myFilmsApp').controller('peliculasCarteleraCtrl', ['$scope', 'peliculas', function($scope, peliculas) {
	$scope.peliculas = peliculas.data.results;
}]);