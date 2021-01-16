const path = require('path');
const { IO } = require('./io.js');

const [, , melonName, melonCount] = process.argv;

const pathName = path.resolve('./data.json');
const io = new IO(pathName);

async function sell() {
	const data = await io.read();
	const dataParsed = JSON.parse(data);

	let found = dataParsed.find((melon) => {
		return melon.melonName === melonName;
	});

	if (found.melonNumber - melonCount >= 0) {
		found.melonNumber -= Number(melonCount);
		await io.write(JSON.stringify(dataParsed));
	} else {
		console.log(
			`Sorry, you have ${found.melonNumber} ${found.melonName} to sell`
		);
	}

	console.table(dataParsed);
}

sell();
