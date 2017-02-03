const gulp = require('gulp');
const exec = require('child_process').exec;
const zip = require('gulp-zip');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('less', (done) => {
    exec('lessc  -x zhaobiao.less  zhaobiao.css ', (err, stdout, stderr) => {

        done();
    })
})


gulp.task('less-watch', ['less'], (done) => {
    reload();
    done();
})

gulp.task('default', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch('./*.less', ['less-watch'])
});



gulp.task('copy', (done) => {

    return gulp.src(['zhaobiao.html', 'zepto.min.js', 'bootstrap.min.css', 'zhaobiao.css'])
        .pipe(zip('webhua.zip'))
        .pipe(gulp.dest('dist'))
})
