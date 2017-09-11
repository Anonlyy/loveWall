/**
 * Created by Xposean on 2017/2/5.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({extname: '.wxss'}))
        .pipe(gulp.dest('./'));
});
gulp.task('wxss', function () {
    gulp.watch('./**/*.scss',['sass']);
});
