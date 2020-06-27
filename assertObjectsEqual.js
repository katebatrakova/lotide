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
  7678
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1); // ['c' , 'd']
  const object2Keys = Object.keys(object2); // ['c' , 'd']
  let arraysEqual;

  //checking if length of both objects match
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  //loop through keys of object1
  for (let object1Key of object1Keys) {
    // here we check if key values/arrays are equal
    if (object1[object1Key] !== object2[object1Key] && !Array.isArray(object1[object1Key])) {
      return false;
    }
    if (Array.isArray(object1[object1Key]) && Array.isArray(object2[object1Key])) {
      if (eqArrays(object1[object1Key], object2[object1Key])) {
        return true;
      } else {
        return false;
      }
    }

  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {

  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${actual}`;
  }
  else {
    return `🛑🛑🛑  Assertion Failed: ${actual} !== ${actual}`;
  }
};

let car1 = { type: "Fiat", model: "500", color: "white", driver: ['Bob', 'Kob'] };
let car2 = { type: "Fiat", model: "500", color: "white", driver: ['Bob'] };


console.log((assertObjectsEqual(car1, car2)));




