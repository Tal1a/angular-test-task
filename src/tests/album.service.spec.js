'use strict';

describe('Album', function () {
	var $httpBackend;
	var Album;

	// Add a custom equality tester before each test
	beforeEach(function () {
		jasmine.addCustomEqualityTester(angular.equals);
	});

	// Load the module that contains the `Album` service before each test
	beforeEach(module('album'));

	// Instantiate the service and "train" `$httpBackend` before each test
	beforeEach(inject(function (_$httpBackend_, _Album_) {
		$httpBackend = _$httpBackend_;
		Album = _Album_;
	}));

	// Verify that there are no outstanding expectations or requests after each test
	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should fetch the all albums from `/albums/all`', function () {
		var albumsAll = [
			{
				"title": "Empire Burlesque",
				"artist": "Bob Dylan",
				"country": "USA",
				"company": "Columbia",
				"price": 10.90,
				"year": 1985
			}, {
				"title": "Hide your heart",
				"artist": "Bonnie Tyler",
				"country": "UK",
				"company": "CBS Records",
				"price": 9.90,
				"year": 1988
			}
		];

		$httpBackend.expectGET('/albums/all').respond(albumsAll);

		var albums = Album.all();

		expect(albums).toEqual([]);

		$httpBackend.flush();
		expect(albums).toEqual(albumsAll);
	});

	it('should delete an album from by id `/albums/delete/:id`', function () {
		$httpBackend.expectDELETE('/albums/delete/1').respond(200, '');

		var album = new Album({id: 1});
		album.$delete();

		$httpBackend.flush();
	});

	it('should update an album by id in the albums array', function () {
		var expectedAlbum = {
			title: "Empire Burlesque",
			artist: "Bob Dylan",
			country: "USA",
			company: "Columbia",
			price: 10.90,
			year: 1985,
			id: 1
		};

		$httpBackend.expectPOST('/albums/update/1', expectedAlbum).respond(200, expectedAlbum);

		var album = new Album(expectedAlbum);
		album.$update({}, function (updatedAlbum) {
			expect(updatedAlbum).toEqual(expectedAlbum);
		});

		$httpBackend.flush();
	});
	
	it('should add an album to the album list', function () {
		var albumToAdd = {
			title: "Empire Burlesque",
			artist: "Bob Dylan",
			country: "USA",
			company: "Columbia",
			price: 10.90,
			year: 1985
		};

		var albumToRespond = {
			title: "Empire Burlesque",
			artist: "Bob Dylan",
			country: "USA",
			company: "Columbia",
			price: 10.90,
			year: 1985,
			id: 90
		};

		$httpBackend.expectPOST('/albums/add', albumToAdd).respond(200, albumToRespond);
		var album = new Album(albumToAdd);
		album.$add({}, function (addedAlbum) {
			expect(addedAlbum).toEqual(albumToRespond);
		});

		$httpBackend.flush();
	})

});














