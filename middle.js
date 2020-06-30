const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2 || arr.length === 0) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    let index = Math.floor(arr.length / 2);
    return [arr[index]];
  }
  if (arr.length % 2 === 0) {
    let index = Math.floor(arr.length / 2);
    return [arr[index - 1], arr[index]];
  }

}


module.exports = middle;