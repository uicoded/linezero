module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'build/assets/css/*.css',
    dest: 'build/assets/css/pref/'
  }
};
