module.exports = function(grunt) {
	'use strict';
	grunt.registerTask('custom', 'Say hello!', function() {
		grunt.log.writeln('Custom task log');
	});
};
