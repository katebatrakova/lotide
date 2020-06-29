const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#Tail Testing", () => {
  it("returns length 2 without the head", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns the first element 'Lighthouse", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });
  it("returns the second element 'Labs", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs');
  });
  it("returns correct tail of the array without the value at index 0", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns correct tail of the numbers array without the value at index 0", () => {
    assert.deepEqual(tail([20, 30, 40, 50, 60]), [30, 40, 50, 60]);
  });


});
