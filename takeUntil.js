const takeUntil = function (array, callback) {
  let lastIndex = 0;

  for (let i in array) {
    if (callback(array[i])) {
      break;
    }
    lastIndex = i;
  }
  return array.slice(0, Number(lastIndex) + 1);
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", 'been', 'to', 'Hollywood']);
