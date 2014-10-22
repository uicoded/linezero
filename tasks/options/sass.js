module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'build/assets/css/global.css': 'assets/css/global.scss'
    }
  }
};
