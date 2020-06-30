const findKey = function (obj, callbackFunction) {
  const objKeys = Object.keys(obj);
  // console.log(objKeys);
  for (let objKey of objKeys) {
    if (callbackFunction(obj[objKey])) {
      return objKey;
    }
  }
};


module.exports = findKey;
