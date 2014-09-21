var gulp = require("gulp"),
    fs = require('fs'),
    path = require('path'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-webserver');

var config = {
    root: path.resolve('./'),
    site: './public',
    images: ['./public/img/**/*.png', './img/**/*.jpg'],
    styles: './src/less/**/*.less',
    styles_compiled: './public/css/',
    scripts: './src/js/**/*.js',
    scripts_compiled: './public/js/',
    port: 8000
};

gulp.task('clean', function() {
    var files = [
        styles_compiled,
    ];

    return gulp.src(files, {
      read: false
    })
    .pipe(clean({
          force: true
      }));
});

gulp.task('build-styles', function() {
    gulp.src(config.styles)
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
         }))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(config.styles_compiled));
});

gulp.task('build-scripts', function() {
    return gulp.src(config.scripts)
        .pipe(changed(config.site))
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(config.scripts_compiled));
});

gulp.task('start-server', function() {
  gulp.src(config.site)
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['build-styles', 'build-scripts', 'start-server']);
