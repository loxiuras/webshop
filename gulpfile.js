'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const stylesheetsDirectory = './assets/stylesheets/development/**/*.scss';
const stylesheetsDestination = './assets/stylesheets//minified/';
sass.compiler = require('node-sass');

function processStylesheets()
{
    return gulp.src(stylesheetsDirectory)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(stylesheetsDestination));
}

gulp.task('processStylesheets', function() {
    return processStylesheets();
});

gulp.task('start', function() {
    gulp.watch([stylesheetsDirectory], {usePolling: true}, processStylesheets);
});