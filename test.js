const round = function (number) {
  return Math.round(number * 100) / 100;
};

const mean = function (arr) {
  if (arr.length === 0) {
    return null;
  }

  let result = 0;
  for (let n of arr) {
    result += n;
  }
  result /= arr.length;
  return round(result);
};

const stdev = function (arr) {

  let meanNumber = mean(arr);

  let deviations = 0;

  for (let n of arr) {
    deviations += Math.pow((n - meanNumber), 2);
  }
  let variance = deviations / arr.length;
  let stdev = Math.sqrt(variance);
  return round(stdev);
};
console.log(stdev([6,2,3,4,9,6,1,0,5]));