const crypto = require('crypto');

var key = 'mykey2018';
var input = 'password';

//
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

//
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
