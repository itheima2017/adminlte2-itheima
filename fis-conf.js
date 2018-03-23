/* eslint-disable */

////////////////////////////////////////////////////////////////////////
// 基础配置
fis.config.set("project.watch.usePolling", true);

// 过滤
fis.set('project.ignore', [
  'README.md',// 说明文件
  '.gitignore', '.jshintrc',// git jshint 配置文件
  'fis-conf.js', 'fis-plus.js', 'gulpfile.js',// 工程化配置文件
  'package.json', 'bower.json', // 包配置文件
  'release/**',// 发布目录
  'plugins/**',// jq插件目录
  'doc/**',// 文档目录
  'bower_components/**',// bower包目录
  'node_modules/**'// node包目录
]);

// 配置 hash 合并图 优化图片
fis.match('*', {
  useHash: false,
  useSprite: false,
  optimizer: null
});
// 插件装载
fis.match('::packager', {
  postpackager: fis.plugin('loader')
});

// ejs模板开启
fis.match('**.html', {
    parser: fis.plugin('html-ejs', {
        // options
    })
});

// scss启用
fis.match('/pages/**/(*.{scss,sass})', {
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  release: '/dist/css/page-$1',
  url: '../css/page-$1'
  // optimizer: fis.plugin('clean-css')
});
fis.match('/ui-modules/**/(*.{scss,sass})', {
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  release: '/dist/css/widget-$1',
  url: '../css/widget-$1'
  // optimizer: fis.plugin('clean-css')
});

////////////////////////////////////////////////////////////////////////
// 资源目录重定义

// ==================================================
// 图片重定向
// ==================================================
fis.match('/assets/img/**/(*.{png,jpg,ico})', {
  release: '/dist/img/$1',
  url: '../img/$1'
});
fis.match('/assets/img/(*.{png,jpg,ico})', {
  release: '/dist/img/$1',
  url: '../img/$1'
});
fis.match('/modules/ui-modules/*/(*.{png,jpg})', {
  release: '/dist/img/widget-$1',
  url: '../img/widget-$1'
});
fis.match('/pages/**/(*.{png,jpg})', {
  release: '/dist/img/page-$1',
  url: '../img/page-$1'
});

// ==================================================
// js重定向
// ==================================================
fis.match('/modules/ui-modules/*/(*.{js,jsx})', {// ui组件js
    release: '/dist/js/widget-$1',
    url: '../js/widget-$1'
});
fis.match('/pages/**/(*.{js,jsx})', {
    release: '/dist/js/page-$1',
    url: '../js/page-$1'
});
fis.match('/plugins/**/*.js', {
    url: '..$0'
});

// ==================================================
// css重定向
// ==================================================
fis.match('/modules/ui-modules/*/(*.{css,less})', {// ui组件css
    release: '/dist/css/widget-$1',
    url: '../css/widget-$1'
});
fis.match('/pages/**/(*.{css,less})', {
  release: '/dist/css/pages-$1',
  url: '../css/pages-$1'
});
fis.match('/assets/css/(*.{css,less})', {
  release: '/dist/css/$1',
  url: '../css/$1'
});
fis.match('/plugins/**/*.css', {
    url: '..$0'
});

// ==================================================
// html重定向
// ==================================================
fis.match('/pages/**/(*.{html,htm})', {
  release: '/dist/pages/$1',
  url: '$1'
});

/* eslint-enable */
