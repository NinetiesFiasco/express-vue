const fs = require('fs');
const fse = require('fs-extra');
const childProcess = require('child_process');

if (fs.existsSync('./dist')){
  fse.removeSync('./dist');
}

childProcess.execSync('vue-cli-service build', {stdio: 'inherit'});

fse.moveSync('./dist', '../server/client', {overwrite: true});