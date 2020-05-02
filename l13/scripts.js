//const os = require('os');

const fs = require('fs');

let str = fs.readFileSync('text.txt', 'utf-8');
console.log(str);
