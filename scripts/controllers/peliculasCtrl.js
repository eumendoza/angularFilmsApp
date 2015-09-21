angular.module('myFilmsApp').controller('peliculasCtrl', ['$scope', '$routeSegment', function($scope, $routeSegment){

	$scope.rutaProximamente = function(){
		return $routeSegment.startsWith('peliculas.proximamente');
	};

	$scope.rutaCartelera = function(){
		return $routeSegment.startsWith('peliculas.cartelera');
	};

}]);