Package.describe({
	name: "jazeee:reactive-dependency",
	summary: 'Simple Reactive Dependency. A convenience class to create a Meteor reactive dependency',
	version: '1.0.2',
	environments: ['client'],
	git: "https://github.com/jazeee/jazeee-reactive-dependency"
});

Package.onUse( function(api) {
	api.versionsFrom('0.9.0');

	// Dependencies
	api.use('deps');
	api.use('coffeescript', 'client');
	api.use('underscore', 'client');

	// Package files
	api.add_files('lib/reactive-dependency.coffee', 'client');

	api.export('ReactiveDependency', 'client');
});

// Test using velocity. https://velocity.readme.io/
// velocity test-package jazeee:reactive-dependency ./
Package.onTest(function(api) {
	api.use('sanjo:jasmine@0.16.4');
	api.use('coffeescript');
	api.use('jazeee:reactive-dependency');

	api.addFiles('tests/reactive-dependency.coffee', 'client');
});
