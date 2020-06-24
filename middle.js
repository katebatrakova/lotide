const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }
  else {
    return `🛑🛑🛑  Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

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
console.log(assertArraysEqual(middle([5, 6, 7, 8, 9, 10]), [7, 9]));
