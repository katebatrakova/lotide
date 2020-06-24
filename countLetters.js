const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentenceString) {
  let result = {};
  for (let letter of sentenceString) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
}

