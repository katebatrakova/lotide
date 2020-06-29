const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');




console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays(['that', 'this', 'those'], ['that', 'this', 'those']), true));
console.log(assertEqual(eqArrays(['that', 'this', 'this'], ['that', 'this', 'those']), false));