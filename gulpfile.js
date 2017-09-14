// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//var sass = require('gulp-sass');
var concat = require('gulp-concat-util');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

// tasks
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**', '!./app/scripts/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('clean', function() {
  return  gulp.src('./dist/*')
      .pipe(clean({force: true}));
});
//gulp.task('sass', function() {
//    gulp.src(['./app/**/*.scss','!./app/bower_components/**'])
//        .pipe(concat('./css/all.scss'))
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./app'));
//});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
// gulp.task('minify-js', function() {
//   gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
//     .pipe(uglify({
//       // inSourceMap:
//       // outSourceMap: "app.js.map"
//     }))
//     .pipe(gulp.dest('./dist/'))
// });
gulp.task('copy-bower-components', function () {
  gulp.src('./app/scripts/**')
    .pipe(gulp.dest('dist/scripts'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('copy-img-files', function () {
  gulp.src('./app/img/*')
    .pipe(gulp.dest('dist/img'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.js', '!./app/bower_components/**'], ['lint']);
  gulp.watch(['./app/**/*.scss','!./app/bower_components/**'], ['sass']);
});

// default task
gulp.task('default',
  ['lint', 'connect','watch']
);
//gulp.task('default',
//		  ['lint', 'sass', 'connect','watch']
//		);
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['lint', 'minify-css', 'copy-html-files','copy-img-files', 'copy-bower-components', 'connectDist']
  );
});


//gulp.task('build', function() {
//	  runSequence(
//	    ['clean'],
//	    ['lint','sass', 'minify-css', 'copy-html-files','copy-img-files', 'copy-bower-components', 'connectDist']
//	  );
//	});
