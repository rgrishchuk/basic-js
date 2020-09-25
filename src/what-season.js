const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	//throw new CustomError('Not implemented');
	if (date === undefined) return 'Unable to determine the time of year!';
	if ( !({}.toString.call(date).slice(8, -1) === 'Date')) throw new Error();
	const seasons = ['winter', 'spring', 'summer', 'fall'];
	if (date.getMonth() == 11) return seasons[0]
		else return seasons[Math.round(date.getMonth() / 3)];
};
