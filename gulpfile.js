var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./scss/*.scss").on('change', browserSync.reload);
	gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// add browserSync.reload to the tasks array to make
// all browsers reload after tasks are complete.
gulp.watch("js/*.js", ['js-watch']);

gulp.task('default', ['serve']);