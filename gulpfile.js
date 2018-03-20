'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
  gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 version', '> 2%', 'firefox 15', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
    .pipe(gulp.dest('./sass/'))
})

gulp.task('styles:watch', function () {
 gulp.watch('./sass/**/*.sass', ['styles']);
});
