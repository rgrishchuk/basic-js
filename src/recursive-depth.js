const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      if (arr.length === 0) return 1
        else return 1 + Math.max(...arr.map(item => this.calculateDepth(item)))
    } else return 0;
  }
};