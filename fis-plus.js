var os = require('os');
var copydir = require('copy-dir');

// ================================================== 
// release时同步plugins
// ==================================================

function cpdir(fromPath, toPath) {
  var homedir = os.homedir();
  var platform = os.platform();
  console.log(platform);

  var distPath = homedir + '/.fis3-tmp/www/dist/' + toPath;
  if (platform == 'win32') {
    distPath = homedir + '\\AppData\\Local\\.fis3-tmp\\www\\dist\\' + toPath;
  }

  // 同步文件
  console.log('同步文件 from:' + fromPath + ' , to:' + distPath);
  copydir.sync(fromPath, distPath);
}

cpdir('./plugins', 'plugins');