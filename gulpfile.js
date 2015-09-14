'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: './',
    hostname: 'localhost',
    port: 8000,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./views/*.html'], ['html']);
});

gulp.task('default', ['server', 'watch']);