
const without = function (source, itemsToRemove) {
  let filteredSource = source.filter(item => {
    return !itemsToRemove.includes(item);
  });
  return filteredSource;
};
module.exports = without;
