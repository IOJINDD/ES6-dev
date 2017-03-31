var gulp = require('gulp'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gulpsync = require('gulp-sync')(gulp);

// 定义解析es6的任务
gulp.task('compile-es6', function() {
  return gulp.src('app/es6/*')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('app/js'));
});

// 讲解析出来的js打包
gulp.task('pack-js', function() {
  return gulp.src('app/js/main.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('app/bundle'));
});

// 定义监听任务
gulp.task('watch', function () {
  gulp.watch('./app/es6/*', gulpsync.sync(['compile-es6', 'pack-js']));
})

//run a server listening at port 8000
gulp.task('server', gulpsync.sync(['compile-es6', 'pack-js', 'watch']), function() {
  connect.server({
    root: 'app',
    port: 3000,
    livereload: true
  });
});
