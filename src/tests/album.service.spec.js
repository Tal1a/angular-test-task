'use strict';

describe('Album', function () {
	var $httpBackend;
	var Album;
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
		$httpBackend.expectGET('/albums/all').respond(albumsAll);

		var albums = Album.all();

		expect(albums).toEqual([]);

		$httpBackend.flush();
		expect(albums).toEqual(albumsAll);
	});

});
