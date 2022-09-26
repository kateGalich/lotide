const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let result = {};

  for (let char of sentence) {
    if (char != ' ') {

      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
}

module.exports = countLetters;


console.log(countLetters('lighthouse in the house'));