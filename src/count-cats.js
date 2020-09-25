const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let result = 0;
	matrix.forEach((item) => {
		let tmp = item.reduce((count, current) => 
			{ 
				if (current == '^^') count++;
				return count },
			0);
		result += tmp;
	});
	return result;
};
