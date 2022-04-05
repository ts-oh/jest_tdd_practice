function analyzeArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  let object = {};

  let average = arr.reduce((a, c) => a + c) / arr.length;

  object.average = Math.round(average);

  let min = arr.sort((a, b) => {
    return a - b;
  })[0];

  object.min = min;

  let max = arr.sort((a, b) => {
    return b - a;
  })[0];

  object.max = max;

  let length = arr.length;

  object.length = length;

  return object;
}

module.exports = analyzeArray;
