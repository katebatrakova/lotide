const tail = require('../tail.js');
const assertEqual = require('../assertEqual');


const result = ["Hello", "Lighthouse", "Labs"];

console.log(assertEqual(tail(result).length, 2)); // ensure we get back two elements
console.log(assertEqual(tail(result)[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(tail(result)[1], "Labs")); // ensure second element is "Labs"