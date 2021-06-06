import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import cssnano from 'cssnano'
import watch from 'gulp-watch'
import sourcemaps from 'gulp-sourcemaps'
import fileinclude from 'gulp-file-include';
import htmlhint from 'gulp-htmlhint';


const server = browserSync.create();

const postcssPlugins = [
	cssnano({
		core: true,
		zindex: false,
		autoprefixer: {
			add: true,
			browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
		}
	})
];

gulp.task('styles-dev', () => {
	gulp.src('./src/scss/styles.scss')
		.pipe(sourcemaps.init({ loadMaps : true}))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/html/'))
		.pipe(server.stream({match: '**/*.css'}))
			
});

gulp.task('html', function() {
	gulp.src(['./src/html/index.html'])
		.pipe(fileinclude({
			prefix: '_',
			basepath: '@file'
		}))
		.on("error", errorHandler)
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(gulp.dest('./public'))
		

});

gulp.task('images-dev', () => {
	gulp.src('./src/img/**/**')
		.pipe(gulp.dest('./public/img'))
});


gulp.task('dev', [
	'styles-dev', 
	'html',
	'images-dev',
], () => {
	server.init({
		server: {
			baseDir: './public'
		}
	});

	watch('./src/scss/**/**', 		() => gulp.start('styles-dev'));
	watch('./src/html/**/**', 		() => gulp.start('html', server.reload));
	watch('./src/img/**/**', 		() => gulp.start('images-dev'))
});

// Simple error handler.
function errorHandler (error) {
	console.log(error.toString());
	this.emit('end');
}

