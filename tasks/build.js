module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'imagemin', 'autoprefixer', 'cssmin', 'doc']);
};
