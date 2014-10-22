module.exports = {
  src: 'path/to/files/*.js',
  options: {
    config: '.jscsrc',
    requireCurlyBraces: ['if'],
    excludeFiles: ['node_modules', 'test', 'test-report']
  }
};
