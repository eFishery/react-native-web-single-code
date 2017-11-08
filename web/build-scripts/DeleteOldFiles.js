// Webpack config
const fs = require('fs');
const del = require('del');
const path = require('path');

const buildPath = path.join(__dirname, '../public');

let manifest;

try {
  const file = fs.readFileSync('./web/public/manifest.json', 'utf8');
  manifest = JSON.parse(file);
} catch (err) {
  if (err.code === 'ENOENT') {
    manifest = {};
  }
}

if (manifest !== {}) {
  const values = Object.keys(manifest).map((key) => `!${buildPath}/${manifest[key]}`);

  const filesToDelete = [
    `${buildPath}/css/*`,
    `${buildPath}/fonts/*`,
    `${buildPath}/img/*`,
    `${buildPath}/js/*`,
  ].concat(values);

  del(filesToDelete).then((paths) => {
    console.log('info', 'Deleted files and folders:\n', paths.join('\n'));
  });
}
