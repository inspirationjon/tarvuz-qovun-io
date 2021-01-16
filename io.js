const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class IO {
	path;
	content;

	constructor(path, content) {
		this.path = path;
		this.content = content;
	}

	read() {
		return read(this.path, 'utf8');
	}

	write() {
		return write(this.path, content);
	}
}

module.exports.IO = IO;
