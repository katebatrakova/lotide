const assertEqual = require('./assertEqual');

const tail = function (array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};

const result = ["Hello", "Lighthouse", "Labs"];
console.log(tail(result))

module.exports = tail;
