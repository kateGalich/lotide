const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const notIn = function(array, value) {
  for (let x of array) {
    if (x === value) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {

  let result = [];

  for (let a of source) {
    if (notIn(itemsToRemove, a)) {
      result.push(a);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

let actual = without(['milk', 'bread', 'banana'], ['milk']);
let expected = ['bread', 'banana'];
assertArraysEqual(actual, expected);

actual = without(["1", "2", "3"], [1, 2, "3"]);
expected = ['1', '2'];
assertArraysEqual(actual, expected);


actual = without(['milk', 'bread', 'milk', 'banana'], ['milk']);
expected = ['bread', 'banana'];
assertArraysEqual(actual, expected);


actual = without(['bread', 'banana'], ['milk']);
expected = ['bread', 'banana'];
assertArraysEqual(actual, expected);


actual = without(['milk', 'bread', 'banana'], []);
expected = ['milk', 'bread', 'banana'];
assertArraysEqual(actual, expected);

actual = without(['milk', 'bread', 'banana'], ['milk', 'banana']);
expected = ['bread'];
assertArraysEqual(actual, expected);
