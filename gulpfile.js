const gulp = require('gulp');
const exec = require('child_process').exec;
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('less', (done) => {
    exec('lessc  -x zhaobiao.less  zhaobiao.css ', (err, stdout, stderr) => {
        console.log('error', err);
        console.log('stdout', stdout);
        console.log('stderr', stderr);
        done();
    })
})


gulp.task('less-watch', ['less'], (done) => {
    reload();
    done();
})

gulp.task('default', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch('./*.less', ['less-watch'])
});

