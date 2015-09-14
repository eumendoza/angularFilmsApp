angular.module('myFilmsApp').controller('navegacionCtrl', ['$scope', '$routeSegment', function($scope, $routeSegment){
	
	$scope.rutaPelicula = function(){
		return $routeSegment.startsWith('peliculas');
	};

	$scope.rutaSerie = function(){
		return $routeSegment.startsWith('series');
	};

}]);