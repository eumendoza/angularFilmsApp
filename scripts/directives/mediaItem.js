angular.module('myFilmsApp').directive('mediaItem', ['ApiService', function(ApiService) {

	return {

		scope: {
			datos: "=",
			alSeleccionar: "&"
		},
		restrict: 'AE',
		templateUrl: 'views/mediaItem.html',
		replace: true,
		link: function($scope) {

			$scope.rutaImagen = function(tam, ruta) {
				return ApiService.obtenerRutaImagen(tam, ruta);
			};

			$scope.clickMedia = function(id) {
				$scope.alSeleccionar({
					mediaId: id
				});
			};

		}
	};
}]);