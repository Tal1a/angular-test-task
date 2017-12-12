module.exports = function(config) {
	config.set({

		basePath: '.',

		files: [
			"node_modules/angular/angular.js",
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/html/**/*.module.js',
			'src/html/**/*!(.module)js',
			'src/tests/*.spec.js'
		],

		autoWatch: false,
		singleRun: true,

		logLevel: config.ERROR,
		port: 9999,

		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		reporters: ['progress'],

		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine'
		]
	});
};
