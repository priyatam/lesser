var gulp = require("gulp"),
    gutil = require('gulp-util'),
    gprint = require('gulp-print'),
    fs = require('fs'),
    path = require('path'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    frontMatter = require('gulp-front-matter'),
    marked = require('gulp-marked'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    replace = require('gulp-replace-task'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('browserify'),
    notify = require("gulp-notify");


// Global Config
var config = {
    root: path.resolve('./'),
    content: './haikus/**/*.txt',
    images: ['./img/**/*.png', './img/**/*.jpg'],
    illustrations: './img/**/*.svg',
    templates: './**/*.jade',
    styles: './css/**/*.styl',
    lib_styles: './css/lib/**/*.css',
    scripts: './js/**/*.js',
    publish: './site',
    publish_img: './site/img',
    publish_fonts: './site/fonts',
    port: 8000
};

gulp.task('init', function() {
    fs.mkdirSync(config.publish);
    fs.mkdirSync(config.publish + "/fonts");
    fs.mkdirSync(config.publish + "/img");
});

gulp.task('clean', function() {
    var files = [
        config.publish + '/*.js',
        config.publish + '/*.css',
        config.publish + '/fonts/*.*',
        config.publish + '/*.html',
    ];
    return gulp.src(files, {
        read: false
    })
        .pipe(gprint())
        .pipe(clean({
            force: true
        }));
});

// TODO
gulp.task('transform-text', function() {
    gulp.src('./index.html')
        .pipe(replace({
            patterns: [{
                match: 'foo',
                replacement: 'bar'
            }]
        }))
        .pipe(gulp.dest(config.publish));
});

gulp.task('build-content', function() {
    gulp.src(config.content)
        .pipe(frontMatter({
            property: 'frontMatter',
            remove: true
        }))
        .pipe(marked({
            gfm: true,
            tables: false,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        }))
        .pipe(concat('haiper.haiku.html'))
        .pipe(gulp.dest(config.publish));
});

gulp.task('build-templates', function() {
    gulp.src(config.templates)
        .pipe(jade())
        .pipe(gulp.dest(config.publish))
        .pipe(connect.reload());
});

gulp.task('build-styles', function() {
    gulp.src(config.styles)
        .pipe(stylus({
            errors: true
        }))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(concat('haiper.min.css'))
        .pipe(gulp.dest(config.publish))
        .pipe(connect.reload());
});

gulp.task('build-lib-styles', function() {
    gulp.src(config.lib_styles)
        .pipe(stylus({
            errors: true
        }))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(concat('haiper.vendors.min.css'))
        .pipe(gulp.dest(config.publish))
        .pipe(connect.reload());
});

gulp.task('build-scripts', function() {
    return gulp.src(config.scripts)
        .pipe(changed(config.publish))
        .pipe(uglify())
        .pipe(concat('haiper.min.js'))
        .pipe(gulp.dest(config.publish))
        .pipe(connect.reload());
});

gulp.task('build-images', function() {
    return gulp.src(config.images)
        .pipe(changed(config.publish_img))
        .pipe(imagemin())
        .pipe(gulp.dest(config.publish_img));
});

gulp.task('build-illustrations', function() {
    return gulp.src(config.illustrations)
        .pipe(changed(config.publish_img))
        .pipe(svgmin())
        .pipe(gulp.dest(config.publish_img));
});

gulp.task('start-server', function() {
    connect.server({
        root: config.publish,
        port: config.port,
        livereload: true
    });
});

gulp.task('open', function() {
    var options = {
        url: "http://localhost:" + config.port,
        app: "google chrome"
    };
    return gulp.src(config.publish + "/index.html").pipe(open("", options));
});

gulp.task('watch', function() {
    gulp.watch(config.templates, ['build-templates']);
    gulp.watch(config.styles, ['build-styles']);
    gulp.watch(config.scripts, ['build-scripts']);
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

            // Send error to notification center
            notify.onError({
                title: "Compile Error",
                message: "<%= error.message %>"
            }).apply(this, args);

            // Keep gulp from hanging on this task
            this.emit('end');
        })
        .pipe(source('design.js'))
        .pipe(gulp.dest(haiper.siteDir));
});

gulp.task('build', ['build-content', 'build-templates', 'build-styles', 'build-lib-styles', 'build-scripts', 'build-images', 'build-illustrations']);

gulp.task('default', ['start-server', 'build', 'watch', 'open']);
