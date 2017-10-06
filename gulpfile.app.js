const gulpBase = require('./gulp.base');

gulpBase({
  server: {
    proxy: 'localhost:5000'
  },
  scripts: {
    files: ['./public/**/*.js', './views/**/*.html']
  },
  sass: {
    files: [
      './client/scss/**/*.scss'
    ],
    includePaths: [
      './',
      './node_modules/foundation-sites/scss'
    ],
    output: './public/css'
  }
});
