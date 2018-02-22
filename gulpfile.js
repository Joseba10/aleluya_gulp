'use strict';
/* Autopmatizar tareas mediante GULP */

/*
* Dependencias o imports
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/*
* Tareas
*/

gulp.task('concatenar', function() {
  return gulp.src('./src/html/*.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass-prod', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

/*definir tarea por defecto y escuchador */

//Default task
gulp.task('default',function() {

    gulp.watch('src/**/*.*',['concatenar','sass']); //Cualquier archivo y extension

});


