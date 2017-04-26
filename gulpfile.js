var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss'),
    sass      = require('gulp-sass');

var files = 'css/ek/**/*.css',  
    dest = 'dist/';

gulp.task('sass', function (cb) {
  gulp.src(files)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest( dest + 'css'));
  return cb();
});

gulp.task('concat', function(cb) {  
  gulp.src(files)
    .pipe(concat('ek.css'))
    .pipe(gulp.dest(dest + 'css-concat'))
    .pipe(rename('ek.min.css'))
    .pipe(uglifycss({
      // "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(dest + 'css-concat'));
  return cb();
});


gulp.task('default', ['sass', 'concat'], function(){});