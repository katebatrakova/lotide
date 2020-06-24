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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }
  else {
    return `🛑🛑🛑  Assertion Failed: ${arr1} !== ${arr2}`;
  }
};


const letterPositions = function (sentence) {
  const results = {};
  // loop through sentence


  for (let index in sentence) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  return results;
};




console.log(assertArraysEqual(letterPositions("hello").o, [4]));
