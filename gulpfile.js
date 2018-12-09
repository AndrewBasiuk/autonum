var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify");

// Скрипты проекта

// All start 
gulp.task('all-js', function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// All end 

// Common
gulp.task('common-js', function() {
	return gulp.src([
		'src/js/libs/jquery.js',
		//'src/js/libs/popper.js',
		//'src/js/libs/bootstrap.min.js',
		'src/js/libs/slick.min.js',

		'src/js/common.js'
		])
	.pipe(concat('common.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Common

// Home
gulp.task('home-js', function() {
	return gulp.src([
		'src/js/home.js'
		])
	.pipe(concat('home.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// Home

// zakaz-imennie
gulp.task('zakaz_imennie-js', function() {
	return gulp.src([
		'src/js/zakaz_imennie.js'
		])
	.pipe(concat('zakaz_imennie.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// zakaz-imennie

// zakaz-imennie
gulp.task('card-js', function() {
	return gulp.src([
		'src/js/card.js'
		])
	.pipe(concat('card.js'))
	//.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
// zakaz-imennie

gulp.task('js', [
	'common-js',
	'home-js',
	'zakaz_imennie-js',
	'card-js'
	], function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		proxy: "num/dist",
    	notify: false // Отключаем уведомления
	});
});

gulp.task('sass', function() {
	return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss', 'src/sass/**/*.css'])
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	//.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	//.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'src/**/*.js'], ['js']);
	gulp.watch('dist/**/*.php', browserSync.reload);
	gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'src/*.html',
		'src/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'src/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'src/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'src/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

/*gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});*/

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
