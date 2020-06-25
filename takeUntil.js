const takeUntil = function (array, callback) {
  const filteredArray = [];
  // loop over the array
  for (let item of array) {
    if (!callback(item)) {
      // add the nitem in an output array
      filteredArray.push(item);
    } else {
      // return the output array
      return filteredArray;
    }
  }
};


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

