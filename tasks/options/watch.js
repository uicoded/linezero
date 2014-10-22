module.exports = {
  options: {
    livereload: true
  },
  scripts: {
    files: ['assets/js/*.js'],
    tasks: ['jshint', 'jscs', 'concat', 'uglify'],
    options: {
      spawn: false
    }
  },
  css: {
    files: ['assets/css/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false
    }
  },
  images: {
    files: ['assets/img/**/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false
    }
  },
  html: {
    files: ['*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  },
  mdown: {
    files: ['*.md'],
    tasks: ['markdown:index'],
    options: {
      spawn: false
    }
  }
};
