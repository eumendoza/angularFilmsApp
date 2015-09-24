angular.module('myFilmsApp').filter('fechaEstreno', function() {

	return function(entrada) {

		return 'Se estrena el ' + entrada;

	};

});