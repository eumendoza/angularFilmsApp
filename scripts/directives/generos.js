angular.module('myFilmsApp').directive('generos', ['$compile', function($compile) {
	return {
		scope: {
			listageneros: '='
		},
		restrict: 'AE',
		link: function($scope, iElm) {
			var vistaGeneros = '<div class=\"lista-generos\">';
			for (var i = 0, tamList = $scope.listageneros.length; i < tamList; i++) {
				vistaGeneros += '<span class=\"label label-info\">'+$scope.listageneros[i].name+'</span>';
			}
			vistaGeneros += '</div>';

			var elemento = angular.element(vistaGeneros);
			var elementoCompil = $compile(elemento)($scope);

			iElm.replaceWith(elementoCompil);
		}
	};
}]);