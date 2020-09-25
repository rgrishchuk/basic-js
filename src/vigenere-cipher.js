const CustomError = require("../extensions/custom-error");
function isLetter(charCode) {
	return charCode >= 65 && charCode <= 90;
}
class VigenereCipheringMachine {
  constructor(direct = true) {
		this.direct = direct;
	}
  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (arguments.length < 2) throw new Error();
		let result = '';
		let messageText = message.toUpperCase();
		let keyText = '';
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if ( isLetter(messageText.charCodeAt(i)) ) {
				if (j < key.length) {
					keyText += key.charAt(j).toUpperCase();
					j++;
				} else {
					keyText += key.charAt(0).toUpperCase();
					j = 1;
				}
			} else {	
				keyText += messageText.charAt(i);
			}
		}
		for (let i = 0; i< message.length; i++) {
			if (isLetter(messageText.charCodeAt(i)) ) {
				result = result + String.fromCharCode(65 + (messageText.charCodeAt(i) + keyText.charCodeAt(i)) % 26);
			} else {
				result = result + messageText.charAt(i);			
			}
		}

		if (this.direct) return result
		else return result.split("").reverse().join(""); 
}    
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (arguments.length < 2) throw new Error();
		let result = '';
		let keyText = '';
		let messageText = message.toUpperCase();
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if ( isLetter(messageText.charCodeAt(i)) ) {
				if (j < key.length) {
					keyText += key.charAt(j).toUpperCase();
					j++;
				} else {
					keyText += key.charAt(0).toUpperCase();
					j = 1;
				}
			} else {	
				keyText += messageText.charAt(i);
			}
		}
		for (let i = 0; i< message.length; i++) {
			if (isLetter(messageText.charCodeAt(i)) ) {
				result = result + String.fromCharCode(65 + (messageText.charCodeAt(i) + 26 - keyText.charCodeAt(i)) % 26);
			} else {
				result = result + messageText.charAt(i);			
			}
		}

		if (this.direct) return result
		else return result.split("").reverse().join(""); 
  }
}

module.exports = VigenereCipheringMachine;
