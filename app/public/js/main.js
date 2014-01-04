
require.config({
	baseUrl: chrome.extension.getURL('js/'),
	paths: {
		'jquery': ['vendor/jquery/jquery-1.10.2'],
		'jquery-ui': ['vendor/jquery/jquery-ui-1.10.3.custom.min'],
		'backbone': ['vendor/backbone/backbone-1.1.0'],
		'underscore': ['vendor/underscore/underscore-1.5.2'],
		'handlebars': ['vendor/handlebars/handlebars-v1.1.2'],
		'less': ['vendor/less/less'],
		'text': ['vendor/require/text']
	},
	shim: {
		'jquery-ui': {
			deps: ['jquery'],
			exports: '$'
		},
		'backbone': {
			deps: ['underscore'],
			exports: 'Backbone'
		}
	}
}); // require config

require(['jquery-ui', 'less'], function($, less) {
	'use strict';

	less.watch();
	var DEFAULT = (function() {
		var init = (function() {
			console.log("Let's do this!")
		})(); // auto-start
	})(); // app namespace
}); // require