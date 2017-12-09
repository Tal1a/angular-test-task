module.exports = function(config) {
	config.set({

		basePath: '.',

		files: [
			"node_modules/angular/angular.js",
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'**/*.module.js',
			'*!(.module|.spec).js',
			'!(node_modules)/**/*!(.module|.spec).js',
			'**/*.spec.js'
		],

		autoWatch: true,
		singleRun: false,

		logLevel: config.LOG_DEBUG,

		frameworks: ['jasmine'],

		browsers: ['Chrome', 'Firefox'],

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine'
		]

	});
};
