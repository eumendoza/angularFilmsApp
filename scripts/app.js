angular.module('myFilmsApp', ['ngRoute', 'route-segment', 'view-segment']);

angular.module('myFilmsApp').config(['$routeSegmentProvider',function($routeSegmentProvider) {
	
	$routeSegmentProvider.when('/peliculas', 'peliculas');
	$routeSegmentProvider.when('/series', 'series');

	$routeSegmentProvider.segment('peliculas', {
		controller: 'peliculasCtrl',
		templateUrl: 'views/peliculas.html'
	});

	$routeSegmentProvider.segment('series', {
		controller: 'seriesCtrl',
		templateUrl: 'views/series.html'
	});



}]);