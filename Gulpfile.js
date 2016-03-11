var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('shorthand', shell.task([
  'jekyll -s --config __config.yml',
  'echo world'
]))
