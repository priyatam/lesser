var gulp = require("gulp"),
    fs = require('fs'),
    path = require('path'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    util = require('gulp-util'),   
    open = require('gulp-open');

var config = {
    root: path.resolve('./'),
    site: './public',
    index_html: './public/index.html',
    images: ['./public/img/**/*.png', './img/**/*.jpg'],
    styles: './src/less/**/*.less',
    styles_compiled: './public/css/',
    scripts: './src/js/**/*.js',
    scripts_compiled: './public/js/',
    port: 9000
};

gulp.task('clean', function() {
    var files = [
        config.styles_compiled,
    ];

    return gulp.src(files, {
      read: false
    })
    .pipe(clean({
          force: true
      }));
});

gulp.task('init', ['clean'], function() {
  gulp.src(['bower_components/lesser/**/*.*'])
  .pipe(gulp.dest(config.root));
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

gulp.task('jshint', function () {
  return gulp.src(config.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('pass'));
});

gulp.task('build-scripts', function() {
    return gulp.src(config.scripts)
        .pipe(changed(config.site))
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(config.scripts_compiled));
});

gulp.task('start-server', function() {
  connect.server({
    root: config.site,
    port: config.port,
    livereload: true
  });
  console.log('Started web server on http://localhost:', config.port);
});

gulp.task('watch', function() {
    gulp.watch(config.styles, ['build-styles']);
    gulp.watch(config.scripts, ['build-scripts']);
});

gulp.task('open', function() {
    var options = {
        url: "http://localhost:" + config.port,
        app: "google chrome"
    };
    gulp.src(config.index_html)
        .pipe(open("", options));
});

gulp.task('default', ['build-styles', 'build-scripts', 'start-server', 'watch', 'open']);
