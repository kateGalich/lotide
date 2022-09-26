const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (!result[char]) {

      result[char] = [];
      result[char].push(i);
    } else {
      result[char].push(i);
    }
  }
  
  return result;
};

module.exports = letterPositions;


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

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);


