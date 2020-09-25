const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
	if (!Array.isArray(arr)) throw new Error();
	let i=0;
	let result = [];
	while (i < arr.length) {
		switch (arr[i]) {
			case '--discard-next':
				if ((i+1) < arr.length) {
					console.log(`${i} <-> ${i+2}`);
					i = i+2;
				} else i++;
				break;
			case '--discard-prev':
				if (arr[i-2] !== '--discard-next') {
					result.pop();
				}; 
				i++;
				break;
			case '--double-next':
				if ((i+1) < arr.length) {
					result.push(arr[i+1]);
				};
				i++;
				break;
			case '--double-prev':
				if (i > 0 && arr[i-2] !== '--discard-next') {
					result.push(arr[i-1]);
				}
				i++;
				break;
			default:
				result.push(arr[i]);
				i++;
				break;
		}
	}
	return result;
};
