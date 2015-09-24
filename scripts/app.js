angular.module('myFilmsApp', ['ngRoute', 'route-segment', 'view-segment']);

angular.module('myFilmsApp').config(['$routeSegmentProvider', function($routeSegmentProvider) {

	$routeSegmentProvider.when('/peliculas', 'peliculas');
	$routeSegmentProvider.when('/peliculas/proximamente', 'peliculas.proximamente');
	$routeSegmentProvider.when('/peliculas/cartelera', 'peliculas.cartelera');
	$routeSegmentProvider.when('/peliculas/detalles', 'peliculas.detalles');

	$routeSegmentProvider.when('/series', 'series');

	$routeSegmentProvider.segment('peliculas', {
		controller: 'peliculasCtrl',
		templateUrl: 'views/peliculas.html'
	});

	$routeSegmentProvider.within('peliculas').segment('proximamente', {
		controller: 'peliculasProximamenteCtrl',
		templateUrl: 'views/peliculasProximamente.html',
		resolve: {
			peliculas: ['ApiService', function(ApiService) {
				return ApiService.consultaApi('movie/upcoming');
			}]
		}
	});

	$routeSegmentProvider.within('peliculas').segment('cartelera', {
		controller: 'peliculasCarteleraCtrl',
		templateUrl: 'views/peliculasCartelera.html',
		resolve: {
			peliculas: ['ApiService', function(ApiService) {
				return ApiService.consultaApi('movie/now_playing');
			}]
		}
	});

	$routeSegmentProvider.within('peliculas').segment('detalles', {
		controller: 'peliculasDetallesCtrl',
		templateUrl: 'views/peliculasDetalles.html',
		resolve: {
			detalles: ['ApiService', '$routeParams', function(ApiService, $routeParams) {
				return ApiService.consultaApi('movie/' + $routeParams.idPelicula);
			}]
		}
	});

	$routeSegmentProvider.segment('series', {
		controller: 'seriesCtrl',
		templateUrl: 'views/series.html'
	});

}]);