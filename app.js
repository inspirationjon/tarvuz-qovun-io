const { IO } = require('./io.js');
const { Melon } = require('./melon.js');

async function app(melonName, melonCount, pathName) {
	const io = new IO(pathName);
	const melon = new Melon(melonName, melonCount);

	const data = await io.read();

	if (data.length === 0) {
		await io.write(JSON.stringify([melon], null, 4));
	} else if (JSON.parse(data).length === 1) {
		const dataParsed = JSON.parse(data);
		dataParsed.push(melon);
		await io.write(JSON.stringify(dataParsed, null, 4));
	}
}

module.exports.app = app;
