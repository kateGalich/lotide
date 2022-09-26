
// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// let actual = middle([3, 2, 6, 3]);
// let expected = [2, 6];
// assertArraysEqual(actual, expected);

// actual = middle(['milk', 'bread', 'banana']);
// expected = ['bread'];
// assertArraysEqual(actual, expected);


// actual = middle(['milk', 2.5, 'banana', true]);
// expected = [2.5, 'banana'];
// assertArraysEqual(actual, expected);


const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', function () {
  it("should return [2, 6] for [3, 2, 6, 3]", () => {
    assert.deepEqual(middle([3, 2, 6, 3]), [2,6]);
  });

  it("should return ['bread'] for ['milk', 'bread', 'banana']", () => {
    assert.deepEqual(middle(['milk', 'bread', 'banana']), ['bread']);
  });
  it("should return [2.5, 'banana'] for ['milk', 2.5, 'banana', true]", () => {
    assert.deepEqual(middle(['milk', 2.5, 'banana', true]), [2.5, 'banana']);
  });
});
