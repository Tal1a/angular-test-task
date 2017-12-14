'use strict';

angular.module('albumList').component('albumList', {
	templateUrl: '/albums',
	controller: ['Album',
	function AlbumListController(Album) {
		this.albums = Album.all();
	}
	]
});


