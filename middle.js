
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
module.exports = middle;

