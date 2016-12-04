var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
var imageop = imagemin();

function errorHandler(err) {
    console.log(err);
    this.emit('end');
};

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/creative.less')
        .pipe(less().on('error', errorHandler))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('copy-images', function () {
    gulp.src(['img/*.jpg'])
        .pipe(imageop)
        .pipe(gulp.dest('dist/img/'));
    gulp.src(['img/*.png'])
        .pipe(imageop)
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('copy-fonts', function () {
    gulp.src(['fonts/**/*'])
        .pipe(gulp.dest('dist/fonts/'));
    gulp.src(['node_modules/bootstrap/dist/fonts/*'])
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('dist', ['less', 'copy-images', 'copy-fonts'], function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('dist'));
});