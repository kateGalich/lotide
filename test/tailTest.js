//const assertEqual = require('../assertEqual');
//const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3); 

// const result1 = tail(["Labs"]);
// assertEqual(result1.toString(), [].toString());

// const result2 = tail([]);
// assertEqual(result2.toString(), [].toString());


const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', function () {
  it("returns 'Lighthouse, Labs' for 'Hello, Lighthouse, Labs'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns [] for ['Labs']", () => {
    assert.deepEqual(tail(["Labs"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
