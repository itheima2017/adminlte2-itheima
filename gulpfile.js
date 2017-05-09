/* eslint-disable */
'use strict';

const gulp = require('gulp');
const del = require('del');
const htmlbeautify = require('gulp-html-beautify');
const extender = require('gulp-html-extend');
var htmlmin = require('gulp-htmlmin');

// 清理加工数据文件
gulp.task('del', function () {
    return del([
            './release/bower_components',
            './release/components',
            './release/assets',
            './release/pages',
            './release/modules',
            './release/plugins',
            './release/pkg',
            './release/dist/pages/*-tab-*'
        ])
        .then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        })
        .catch(err =>{
            console.error('Error from Deleted compress task', err.toString());
        });
});

// layout编译
gulp.task('layout', function () {
    var stream = gulp.src('./release/dist/pages/single/*.html')
        .pipe(extender({annotations:false,verbose:false})) // default options 
        .pipe(gulp.dest('./release/dist/pages/all-in-one'));
    return stream;
});

// 美化代码
function createErrorHandler(name) {
    return function (err) {
        console.error('Error from ' + name + ' in compress task', err.toString());
    };
}

// 输出html美化
var options = {
    "indent_size": 4,
    "indent_char": " ",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": false
};
gulp.task('htmlbeautify', function () {
    var stream = gulp.src('./release/dist/pages/*.html')
        .on('error', createErrorHandler('gulp.src'))
        .pipe(htmlbeautify(options))
        .on('error', createErrorHandler('htmlbeautify'))
        .pipe(htmlmin({}))
        .pipe(gulp.dest('./release/dist/pages'))
        .on('error', createErrorHandler('gulp.dest'));
    return stream;
});
gulp.task('htmlbeautify2', function () {
    var stream = gulp.src('./release/dist/pages/all-in-one/*.html')
        .on('error', createErrorHandler('gulp.src'))
        .pipe(htmlbeautify(options))
        .on('error', createErrorHandler('htmlbeautify'))
        .pipe(htmlmin({}))
        .pipe(gulp.dest('./release/dist/pages/all-in-one'))
        .on('error', createErrorHandler('gulp.dest'));
    return stream;
});

// 复制文件到发布目录
gulp.task('cp', function () {
    var stream = gulp.src('./plugins/**/*.*')
        .pipe(gulp.dest('./release/dist/plugins'));
    return stream;
});

gulp.task('default',function(){});