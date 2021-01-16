const {
  IO
} = require('./io.js');
const {
  Melon
} = require('./melon.js');

async function app(melonName, melonCount, pathName) {
  const io = new IO(pathName);
  const melon = new Melon(melonName, melonCount);

  const data = await io.read();

  if (!data.length) {
    await io.write(JSON.stringify([melon], null, 2));

  } else if (data) {

    const dataParsed = JSON.parse(data);
    dataParsed.push(melon);
    await io.write(JSON.stringify(dataParsed, null, 2));
  }
}

module.exports.app = app;