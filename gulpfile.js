var gulp = require("gulp"),
    gutil = require('gulp-util'),
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
    rev = require('gulp-rev'),
    replace = require('gulp-replace-task'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('browserify'),
    notify = require("gulp-notify");


var config = {
    root: path.resolve('./'),
    images: ['./img/**/*.png', './img/**/*.jpg'],
    illustrations: './img/**/*.svg',
    content: './haikus/**/*.txt',
    templates: './templates/**/*.jade',
    styles: './css/**/*.styl',
    styles_lib: './css/lib/**/*.css',
    scripts: './js/**/*.js',
    site: './app',
    site_index: './app/index.html',
    site_script: 'site.min.js',
    site_style: 'site.min.css',
    site_vendor_style: 'site.vendors.min.css',
    site_images: './app/img',
    site_fonts: './app/fonts',
    port: 8000
};

gulp.task('init', function() {
    fs.mkdirSync(config.site);
    fs.mkdirSync(config.site + "/fonts");
    fs.mkdirSync(config.site + "/img");
});

gulp.task('clean', function() {
    var files = [
        config.site + '/*.js',
        config.site + '/*.css',
        config.site + '/img/*.*',
        config.site + '/fonts/*.*',
        config.site + '/*.html',
    ];

    return gulp.src(files, {
        read: false
    })
        .pipe(clean({
            force: true
        }));
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
        .pipe(concat('site.haiku.html'))
        .pipe(gulp.dest(config.site));
});

gulp.task('build-templates', function() {
    gulp.src(config.templates)
        .pipe(jade())
        .pipe(gulp.dest(config.site))
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
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest(config.site))
        .pipe(connect.reload());
});

gulp.task('build-styles-lib', function() {
    gulp.src(config.styles_lib)
        .pipe(stylus({
            errors: true
        }))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(concat(config.site_vendor_style))
        .pipe(gulp.dest(config.site))
        .pipe(connect.reload());
});

gulp.task('build-scripts', function() {
    return gulp.src(config.scripts)
        .pipe(changed(config.site))
        .pipe(uglify())
        .pipe(concat(config.site_script))
        .pipe(gulp.dest(config.site))
        .pipe(connect.reload());
});

gulp.task('build-images', function() {
    return gulp.src(config.images)
        .pipe(changed(config.site_images))
        .pipe(imagemin())
        .pipe(gulp.dest(config.site_images));
});

gulp.task('build-illustrations', function() {
    return gulp.src(config.illustrations)
        .pipe(changed(config.site_images))
        .pipe(svgmin())
        .pipe(gulp.dest(config.site_images));
});

// TODO: Integrate with build-index
gulp.task('rev', function() {
    return gulp.src([config.site_style, config.site_script])
        .pipe(rev())
        .pipe(gulp.dest(config.site))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.site));
});

// TODO
gulp.task('build-index', function() {
    gulp.src('./index.html')
        .pipe(replace({
            patterns: [{
                match: 'foo',
                replacement: 'bar'
            }]
        }))
        .pipe(gulp.dest(config.site));
});

gulp.task('start-server', function() {
    connect.server({
        root: config.site,
        port: config.port,
        livereload: true
    });
});

gulp.task("open", function() {
    var options = {
        url: "http://localhost:" + config.port,
        app: "google chrome"
    };
    gulp.src(config.app_index)
        .pipe(open("", options));
});

gulp.task('watch', function() {
    gulp.watch(config.templates, ['build-templates']);
    gulp.watch(config.styles, ['build-styles']);
    gulp.watch(config.scripts, ['build-scripts']);
});

// FIXME
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

            // Keep gulp from hanging
            this.emit('end');
        })
        .pipe(source('design.js'))
        .pipe(gulp.dest(haiper.siteDir));
});

gulp.task('build', ['build-content', 'build-templates', 'build-styles', 'build-styles-lib', 'build-scripts', 'build-images', 'build-illustrations']);

gulp.task('default', ['start-server', 'build', 'watch', 'open']);
