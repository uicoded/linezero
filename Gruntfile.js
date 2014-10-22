/*
 TODO:

	single tool?
		- Linter: jshint, jscs
		- Concat: concat, uglify
*/

module.exports = function(grunt) {
	'use strict';
	// Utility to load the different option files
	// based on their names
	function loadConfig(path) {
		var glob = require('glob'),
			object = {},
			key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/, '');
			object[key] = require(path + option);
		});

		return object;
	}

	// Initial config
	var config = {
		pkg: grunt.file.readJSON('package.json')
	};

	// Load tasks from the tasks folder
	grunt.loadTasks('tasks');

	// Load all the tasks options in tasks/options base on the name:
	// watch.js => watch{}
	grunt.util._.extend(config, loadConfig('./tasks/options/'));

	grunt.initConfig(config);

	// parses package.json dependencies (matching the `grunt-*` pattern) and auto-loads all grunt tasks
	require('load-grunt-tasks')(grunt);

	// Default Task
	grunt.registerTask('default', ['build-and-connect']);

};
