class Melon {
	melonName;
	melonNumber = 0;
	sold = 0;
	remained = 0;

	constructor(melonName, melonNumber = 0, sold = 0) {
		this.melonName = melonName;
		this.melonNumber = Number(melonNumber);
		this.sold = Number(sold);
		this.remained = Number(melonNumber);
	}
}

module.exports.Melon = Melon;
