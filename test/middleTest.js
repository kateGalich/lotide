
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let actual = middle([3, 2, 6, 3]);
let expected = [2, 6];
assertArraysEqual(actual, expected);

actual = middle(['milk', 'bread', 'banana']);
expected = ['bread'];
assertArraysEqual(actual, expected);


actual = middle(['milk', 2.5, 'banana', true]);
expected = [2.5, 'banana'];
assertArraysEqual(actual, expected);
