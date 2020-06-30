const takeUntil = function (array, callback) {
  const filteredArray = [];
  // loop over the array
  for (let item of array) {
    if (!callback(item)) {
      // add the item in an output array
      filteredArray.push(item);
    } else {
      // return the output array
      return filteredArray;
    }
  }
};

module.exports = takeUntil;

