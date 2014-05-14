var gulp = require("gulp");
var fs = require('fs');
var path = require('path');
var browserify = require('browserify');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var open = require('gulp-open');
var notify = require("gulp-notify");
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var connect = require('connect');
var http = require('http');

// Server config
var config = {
    port: '8080',
    root: path.resolve('./')
};

gulp.task('watch', function() {
    var server = livereload();

    var reload = function(file) {
        server.changed(file.path);
    };

    gulp.watch('src/js/**', ['browserify']);
    gulp.watch('src/img/**', ['images']);
    gulp.watch(['build/**']).on('change', reload);
});

gulp.task('images', function() {
    var dest = './build/img';

    return gulp.src('./img/**')
        .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});

gulp.task('browserify', function() {
    return browserify({
        entries: ['./js/design.js'],
        extensions: ['.js']
    })
        .bundle({
            debug: true
        })
        .on('error', function() {
            var args = Array.prototype.slice.call(arguments);

            // Send error to notification center with gulp-notify
            notify.onError({
                title: "Compile Error",
                message: "<%= error.message %>"
            }).apply(this, args);

            // Keep gulp from hanging on this task
            this.emit('end');
        })
        .pipe(source('design.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('serve', function() {
    var app = connect()
        .use(connect.logger('dev'))
        .use(connect.static(config.root));

    http.createServer(app).listen(config.port);
});

gulp.task('open', ['build'], function() {

    var options = {
        url: "http://localhost:" + config.port,
        app: "google chrome"
    };

    return gulp.src("./index.html").pipe(open("", options));
});

gulp.task('build', ['browserify', 'watch', 'images']);

gulp.task('default', ['build', 'watch', 'serve', 'open']);
