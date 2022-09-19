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

const middle = function(arr) {
  let result = [];
  let middle = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    result.push(arr[middle]);
  } else {
    result.push(arr[middle - 1]);
    result.push(arr[middle]);

  }
  return result;
};


let actual = middle([3, 2, 6, 3]);
let expected = [2, 6];
assertArraysEqual(actual, expected);

actual = middle(['milk', 'bread', 'banana']);
expected = ['bread'];
assertArraysEqual(actual, expected);


actual = middle(['milk', 2.5, 'banana', true]);
expected = [2.5, 'banana'];
assertArraysEqual(actual, expected);

