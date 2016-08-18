var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();

gulp.task('browserify', function () {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['browserify'], function () {
  gulp.src(['./app/**/*.html','./app/**/*.css'])
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', ['build'], function () {
  browserSync.init({
    port: 8000,
    server: {
      baseDir: './public',
      routes: { '/node_modules': 'node_modules' }
    }
  });
});

gulp.task('default', ['browserSync'], function(){
  gulp.watch('./app/**/*.*', ['build']);
  gulp.watch('./public/**/*.*').on('change', browserSync.reload);
});
