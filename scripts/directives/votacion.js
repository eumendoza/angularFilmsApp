angular.module('myFilmsApp').directive('votacion', ['$compile', function($compile) {
	return {
		scope: {
			media: '@'
		},
		restrict: 'AE',
		link: function($scope, element) {
			var mediaNumero = parseFloat($scope.media),
				mediaEntera = Math.round(mediaNumero),
				vistaPuntuacion = '<div>';

			for (var i = 0; i < 10; i++) {
				if (i < mediaEntera) {
					vistaPuntuacion += '<span class=\"glyphicon glyphicon-star\"></span>';
				} else {
					vistaPuntuacion += '<span class=\"glyphicon glyphicon-star-empty\"></span>';
				}
			}

			vistaPuntuacion += '</div>';

			var nuevoElemento = angular.element(vistaPuntuacion);
			var nuevoElementoCompilado = $compile(nuevoElemento)($scope);

			element.replaceWith(nuevoElementoCompilado);

		}
	};
}]);