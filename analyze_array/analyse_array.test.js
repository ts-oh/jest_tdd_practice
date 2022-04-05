const analyzeArray = require("./analyse_array");

test("returns an object that contains properties of avg, min, max, length when an array is passed", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("returns an object that contains properties of avg, min, max, length when an array is passed", () => {
  expect(analyzeArray([2, 0, 33, 54, 21, 986, 43, 12])).toEqual({
    average: 144,
    min: 0,
    max: 986,
    length: 8,
  });
});

test("returns an object that contains properties of avg, min, max, length when an array is passed", () => {
  expect(analyzeArray([])).toEqual(null);
});
