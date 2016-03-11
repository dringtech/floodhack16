var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('default', ['serve'])

gulp.task('serve', shell.task([
  'jekyll serve --config _config.yml'
]))
