var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var server = require('gulp-server-livereload');
var install = require("gulp-install");
var run = require('gulp-run');

var devServerHost = 'localhost';

gulp.task( 'server', [], function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      clientConsole: false,
      directoryListing: false,
      open: false,
      host: devServerHost,
      port: 3001
    }));
});

gulp.task('default', ['server']);
