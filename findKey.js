const findKey = function (obj, callbackFunction) {
  const objKeys = Object.keys(obj);
  // console.log(objKeys);
  for (let objKey of objKeys) {
    if (callbackFunction(obj[objKey])) {
      return objKey;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));// => "noma"