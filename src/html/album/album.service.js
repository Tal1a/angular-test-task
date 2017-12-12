'use strict';

angular.module('album').factory('Album', ['$resource',
	function ($resource) {
		return $resource('/albums', {}, {
			all: {
				url: '/albums/all',
				method: 'GET',
				isArray: true
			},
			delete: {
				url: '/albums/delete/:id',
				method: 'DELETE',
				params: {id: '@id'}
			},
			update: {
				url: '/albums/update/:id',
				method: 'POST',
				params: {id: '@id'}
			},
			add: {
				url: '/albums/add',
				method: 'POST'
			}
		});
	}
]);


// add створити новий альбом з 
// полями які треба, викликати add і потім переконатися що на сервер пішов відповідний ріквест 
// з відповідним ріквест боді

//