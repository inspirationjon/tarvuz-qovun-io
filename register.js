const path = require('path');
const { IO } = require('./io.js');
const { Melon } = require('./melon.js');

const [, , melonName, melonCount] = process.argv;

const melon = new Melon(melonName, melonCount);

const pathName = path.resolve('./data.json');
const io = new IO(pathName);

async function main() {
	const data = await io.read();
	const dataParsed = JSON.parse(data);

	if (dataParsed.length === 0 || dataParsed.length === 1) {
		dataParsed.push(melon);
		await io.write(JSON.stringify(dataParsed));
	}
}

main();
