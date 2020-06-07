var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('js-fef', function(){
    return gulp.src(['https://unpkg.com/react@16/umd/react.development.js', 'https://unpkg.com/react-dom@16/umd/react-dom.development.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-fef'], function(){});