const {src, watch, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchStyleFiles(){
    watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchStyleFiles)