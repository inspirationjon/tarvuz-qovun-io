const path = require('path');
const { app } = require('./app.js');

const [, , melonName, melonCount] = process.argv;

const pathName = path.resolve('./data.json');

app(melonName, melonCount, pathName);
