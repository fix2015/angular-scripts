var fs = require('fs-extra');
var path = require('path');
var spawn = require('cross-spawn');
var pathExists = require('path-exists');
var chalk = require('chalk');

module.exports = function(appPath, appName, verbose, originalDirectory) {
  var ownPackageName = require(path.join(__dirname, '..', 'package.json')).name;
  var ownPath = path.join(appPath, 'node_modules', ownPackageName);
  var appPackage = require(path.join(appPath, 'package.json'));

  // Copy over some of the devDependencies
  appPackage.dependencies = appPackage.dependencies || {};
  appPackage.devDependencies = appPackage.devDependencies || {};
  

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2)
  );

  var readmeExists = pathExists.sync(path.join(appPath, 'README.md'));
  if (readmeExists) {
    fs.renameSync(path.join(appPath, 'README.md'), path.join(appPath, 'README.old.md'));
  }

  fs.copySync(path.join(ownPath, 'path'), appPath);

  fs.move(path.join(appPath, 'gitignore'), path.join(appPath, '.gitignore'), [], function (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        var data = fs.readFileSync(path.join(appPath, 'gitignore'));
        fs.appendFileSync(path.join(appPath, '.gitignore'), data);
        fs.unlinkSync(path.join(appPath, 'gitignore'));
      } else {
        throw err;
      }
    }
  });

  console.log('Installing angular from npm...');
  console.log();
  var args = [
    'install',
    'angular',
    'angular-ui-router',
    'body-parser',
    'express',
    'gulp',
    'gulp-concat',
    'gulp-csso',
    'gulp-plumber',
    'gulp-sass',
    'gulp-uglify',
    '--save',
    verbose && '--verbose'
  ].filter(function(e) { return e; });
  var proc = spawn('npm', args, {stdio: 'inherit'});
  proc.on('close', function (code) {
    if (code !== 0) {
      console.error('`npm ' + args.join(' ') + '` failed');
      return;
    }
    
    var cdpath;
    if (originalDirectory &&
        path.join(originalDirectory, appName) === appPath) {
      cdpath = appName;
    } else {
      cdpath = appPath;
    }

    console.log();
    console.log('Success! Created ' + appName + ' at ' + appPath);
    console.log('Inside that directory, you can run several commands:');
    console.log();
    console.log(chalk.cyan('  gulp dev'));
    console.log('    Run gulp with watch mode.');
    console.log();
    console.log(chalk.cyan('  gulp build'));
    console.log('    Run gulp with production mode.');
    console.log();
    console.log(chalk.cyan('  npm start'));
    console.log('    Run server.');
    console.log();
    console.log('We suggest that you begin by typing:');
    console.log();
    console.log(chalk.cyan('  cd'), cdpath);
    console.log('  ' + chalk.cyan('gulp dev'));
    console.log('  ' + chalk.cyan('npm start'));
  });
};
