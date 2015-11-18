var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);

	// run webpack
	webpack(myConfig, function(err, stats) {
		callback();
	});
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	bs.notify(messages.jekyllBuild);
	return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	bs.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
	bs.init({
		server: {
			baseDir: '_site',
			port: 8000
		}
	});
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
	return gulp.src('_sass/main.scss')
		.pipe(sass({
			includePaths: ['scss'],
			onError: bs.notify
		}))
		.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('_site/css'))
		.pipe(bs.stream({once: true}))
		.pipe(gulp.dest('./css'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function () {
	runSequence('browser-sync', 'watch');
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch('_sass/**/*.scss', ['sass']);
	gulp.watch('scripts/**/*.js', ['webpack:build']);
	gulp.watch('_site/**/*.js', function(){
		bs.reload();
	});
	gulp.watch([
		'index.html',
		'_layouts/*',
		'_includes/*',
		'about/*',
		'dist/*',
		'_posts/*'
	], ['jekyll-rebuild']);
});

