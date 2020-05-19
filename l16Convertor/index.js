// v1
/* const converter = require('./converter');

console.log(converter.convertToUa(1000));
console.log(converter.convertToUSD(1000)); */

// v2
const Converter = require('./converter');
const baseCurrencyUSD = 26.53;

let convertation = new Converter(baseCurrencyUSD);
console.log(convertation.convertToUa(1000));
