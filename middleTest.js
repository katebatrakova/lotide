const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');




console.log(assertArraysEqual(middle([5, 6, 7, 8, 9, 10]), [7, 9]));
console.log(assertArraysEqual(middle([5, 6, 7, 8, 9, 10]), [7, 8]));
