// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
gulp.task('sass', function (cb) {
    gulp
        .src('*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
        return f.base;
    }));
    cb();
});
gulp.task('default', gulp.series('sass', function (cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
}));
//# sourceMappingURL=gulpfile.js.map