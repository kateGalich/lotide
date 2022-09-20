const map = function (array, callback) {
  const results = [];
  for (let item of array) {

    results.push(callback(item));

  }
  return results;
}

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];
const words2 = [];
const words3 = [2, "control", "", "major"];

//const results1 = map(words, word => word[0]);
//console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ] );
assertArraysEqual(map(words2, word => word[0]), [] );
assertArraysEqual(map(words3, word => word[0]), [, 'c',, 'm'] );
