'use strict';

angular.module('testTask').config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/resources/data', {
			template: '<album-list></album-list>'
		}).when('/resources/:Id', {
			template: '<album-edit></album-edit>'
		}).otherwise('/albums');
	}
]);
