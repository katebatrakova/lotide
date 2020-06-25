const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let results = {}
  //go through itemsToCount and check which a true. Here's an object with all needed keys/names
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      results[item] = undefined;
    }
  }
  // Now loop through each object's key and compare it to firstNames. Loop inside the loop. Increment the counter if both match.
  for (let key in results) {
    for (let name of allItems) {
      if (key === name) {
        if (results[key] === undefined) {
          results[key] = 1;
        } else {
          results[key]++;
        }
      }
    }
  }
  return results;
}






const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);