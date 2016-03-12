var gulp = require('gulp');
var gutil = require('gulp-util')
var shell = require('gulp-shell');
var yaml = require('js-yaml');
var map = require('map-stream');

gulp.task('default', ['serve'])

gulp.task('serve', shell.task([
  'jekyll serve --config _config.yml'
]))

gulp.task('clean', shell.task([
  'jekyll clean --config _config.yml'
]))

gulp.task('makejson', function() {
  gulp.src('_data/recovery_map.yml')
    .pipe(map(function(file,cb){
      if (file.isNull()) return cb(null, file); // pass along
      if (file.isStream()) return cb(new Error("Streaming not supported"));
      var json;

      try {
        json = yaml.load(String(file.contents.toString('utf8')));
      } catch(e) {
        console.log(e);
        console.log(json);
      }
      var data = [];
      var fDay = "2015-12-26";
      json.forEach(function(t) {
        var start = t.start;
        t.topics.forEach(function(e) {
          var sd = new Date(fDay);
          // sd.setDate(sd.getDate() + start);
          sd.setDate(sd.getDate() + start);
          var task = {
            content: `<h1>${e.title}</h1><p>${e.notes}</p>`,
            start: sd.toJSON(),
          }
          if (t.hasOwnProperty('end')) {
            var end = t.end;
            var ed = new Date(fDay);
            ed.setDate(ed.getDate() + end);
            task.end = ed.toJSON();
          }
          data.push(task)
        })
      })

      file.path = gutil.replaceExtension(file.path, '.json')
      file.contents = new Buffer(JSON.stringify(data));

      cb(null,file);
    }))
    .pipe(gulp.dest('data'));});
