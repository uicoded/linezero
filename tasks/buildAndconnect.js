module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('build-and-connect', ['concat', 'uglify', 'sass', 'imagemin', 'autoprefixer', 'cssmin', 'doc', 'coveralls', 'connect:server:keepalive']);
};
