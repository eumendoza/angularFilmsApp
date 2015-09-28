angular.module('myFilmsApp').controller('peliculasDetallesCtrl', ['$scope', 'detalles', 'ApiService', function($scope, detalles, ApiService) {
	$scope.detalles = detalles.data;
	$scope.rutaImagen = function(tam, ruta) {
		return ApiService.obtenerRutaImagen(tam, ruta);
	};
}]);