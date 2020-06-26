// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
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
    if (Array.isArray(object1[object1Key]) && Array.isArray(object2[object1Key]) && eqArrays(object1[object1Key], object2[object1Key])) {
      arraysEqual = true;
    }
  }
  // loop through primitive data types
  if (arraysEqual) {
    for (let object1Key of object1Keys) {
      if (object1[object1Key] !== object2[object1Key] && !Array.isArray(object1[object1Key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
