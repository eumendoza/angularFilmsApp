angular.module('myFilmsApp').service('ApiService', ['$http', 'configuracion', function($http, configuracion) {
	this.consultaApi = function(servicio) {
		return $http.get('https://api.themoviedb.org/' + configuracion.apiVersion + '/' + servicio + '?api_key=' + configuracion.apiKey + '&language=es');
	};

	this.obtenerRutaImagen = function(tam, imagen) {
		return imagen == null ? null : configuracion.pathImagen + tam +imagen;
	};

}]);