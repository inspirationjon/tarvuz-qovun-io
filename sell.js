const path = require('path');
const {
  IO
} = require('./io.js');
const {
  evt
} = require('./error.js')

const [, , melonName, melonCount] = process.argv;

const pathName = path.resolve('./data.json');
const io = new IO(pathName);

async function sell() {
  const data = await io.read();
  const dataParsed = JSON.parse(data);

  try {
    let found = dataParsed.find((melon) => {
      return melon.melonName === melonName;
    });

    if (found.remained - melonCount >= 0) {
      found.remained -= Number(melonCount);
      found.sold += Number(melonCount);
      await io.write(JSON.stringify(dataParsed));
    } else {
      evt.emit('error', `Sorry, you have ${found.remained} ${found.melonName} to sell`);
      return;
    }
  } catch {
    evt.emit('error', `You did not registered this melon yet!`)
  }
}

sell();