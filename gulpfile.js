var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss'),
    sass      = require('gulp-sass'),
    gzip = require('gulp-gzip'),
    size = require('gulp-filesize');

var files = 'css/ek/**/*.scss',  
    dest = 'dist/';

gulp.task('sass', function (cb) {
  gulp.src(files)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest( dest + 'css'));
  return cb();
});

gulp.task('concat', function(cb) {  
  gulp.src(files)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('ek.css'))
    .pipe(gulp.dest(dest + 'css-concat'))
    .pipe(rename('ek.min.css'))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest(dest + 'css-concat'))
    .pipe(gzip())
    .pipe(gulp.dest(dest + 'css-concat'))
    .pipe(size());
  return cb();
});


gulp.task('default', ['sass', 'concat'], function(){});