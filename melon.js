class Melon {
	melonName;
	melonNumber = 0;
	expense = 0;
	remained = 0;

	constructor(melonName, melonNumber = 0, expense = 0, remained = 0) {
		this.melonName = melonName;
		this.melonNumber = Number(melonNumber);
		this.expense = Number(expense);
		this.remained = Number(remained);
	}
}

module.exports.Melon = Melon;
