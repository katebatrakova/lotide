const assert = require('chai').assert;
const middle = require('../middle');


describe("#Middle array Testing", () => {
  it("should return [7,8]  for [5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9, 10]), [7, 8]);
  });
  it("should return  [7] for [5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9]), [7]);
  });

  it("should return  ['d'] for ['a','b','c','d','e','f','g']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d']);
  });
});



