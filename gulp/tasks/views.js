const { src, dest } = require('gulp');
const browserSync = require('browser-sync');
const gulpIf = require('gulp-if');

const { paths, isProduction } = require('../config');
const htmlmin = require('gulp-htmlmin');

const views = () => {
  return src(paths.views.src)
    .pipe(gulpIf(isProduction, htmlmin({ collapseWhitespace: true })))
    .pipe(dest(paths.views.dist))
    .pipe(browserSync.stream())
}

module.exports = views;
