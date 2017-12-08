module.exports = function(port) {

	var express = require('express'),
		app = express();

	port = typeof port === 'undefined' || !port ? 8000 : port;

	app.use('/node_modules', express.static('./node_modules')); // just to make index.html work
	app.use('/html', express.static('./src/html'));
	app.use('/albums', require('./api/albums.js')());

	app.get('/', function(req, res, next) {
		res.redirect('/html/');
	});

	var server = app.listen(port, function() {
		console.log('Listening on port ' + port + '!');
	});
};