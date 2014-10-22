module.exports = {
  all: {
    files: [
      {
        expand: true,
        src: ['/**/*.md', '!**/node_modules/**', '!build', '!assets'],
        dest: '',
        ext: '.html'
      }
    ],
    options: {
      template: 'assets/jst/linezero.jst',
      // preCompile: function(src, context) {},
      // postCompile: function(src, context) {},
      // templateContext: {},
      markdownOptions: {
        gfm: true,
        highlight: 'manual',
        codeLines: {
          before: '<span>',
          after: '</span>'
        }
      }
    }
  },
  index: {
    files: [
      {
        src: 'README.md', dest: 'index.html'
      }
    ],
    options: {
      template: 'assets/jst/linezero.jst',
      // preCompile: function(src, context) {},
      // postCompile: function(src, context) {},
      // templateContext: {},
      markdownOptions: {
        gfm: true,
        highlight: 'manual',
        codeLines: {
          before: '<span>',
          after: '</span>'
        }
      }
    }
  }
};
