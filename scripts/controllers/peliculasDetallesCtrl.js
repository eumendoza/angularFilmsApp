angular.module('myFilmsApp').controller('peliculasDetallesCtrl', ['$scope', 'detalles', function($scope, detalles) {
	$scope.detalles = detalles.data;
}]);