'use strict';

angular.module('testTask').config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/albums', {
			template: '<album-list></album-list>'
		}).when('/albums/:id', {
			template: '<album-edit></album-edit>'
		}).otherwise('/albums');
	}
]);
