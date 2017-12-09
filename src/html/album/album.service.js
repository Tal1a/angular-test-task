'use strict';

angular.module('album').factory('Album', ['$resource',
	function ($resource) {
		return $resource('/albums', {}, {
			'all': {
				url: '/albums/all',
				method: 'GET',
				isArray: true
			},
			'delete': {
				url: '/albums/delete/:id',
				method: 'DELETE',
				params: {id: '@id'}
			},
			'update': {
				url: '/albums/update/:id',
				method: 'POST',
				params: {id: '@id'}
			},
			'add': {
				url: '/albums/add',
				method: 'POST'
			}
		});
	}
]);

// angular.module('album').component('Example', ['Album', function(album) {
// 	album.all((albums) => {
//
// 	});
// }]);


// update , add $save