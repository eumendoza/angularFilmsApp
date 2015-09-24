angular.module('myFilmsApp').controller('peliculasProximamenteCtrl', ['$scope','$filter','peliculas', function($scope,$filter,peliculas) {
	$scope.peliculas = $filter('orderBy')(peliculas.data.results,['release_date','title']);
}]);