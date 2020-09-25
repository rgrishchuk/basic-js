const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!('repeatTimes' in options)  || options.repeatTimes === 0 )
  return str;

  let addition = '';
  let resultArray = [];
  let additionArray = [];
  if (!('separator' in options)) options.separator = '+';
  if (!('additionSeparator' in options)) options.additionSeparator = '|';

  if (!('additionRepeatTimes' in options) || options.additionRepeatTimes === 0 ) addition =''
  else {
    if ('addition' in options) 
      addition = '' + options.addition
      else addition = '';
  }

  return new Array(options.repeatTimes).
  fill(str + new Array(options.additionRepeatTimes).
  fill(addition).join(options.additionSeparator)).join(options.separator);

};
  