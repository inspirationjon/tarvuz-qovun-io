const path = require('path');
const {
  app
} = require('./app.js');
const {
  evt
} = require('./error.js')

const [, , melonName, melonCount] = process.argv;

const pathName = path.resolve('./data.json');

if (!isNaN(melonCount)) {
  return app(melonName, melonCount, pathName);
} else {
  evt.emit('error',
    `Please, enter number of ${melonName} correspondently`);
  return;
}