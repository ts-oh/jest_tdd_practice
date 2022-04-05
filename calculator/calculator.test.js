const mathModule = require("./caculator");

test("return two numbers added", () => {
  expect(mathModule.add(10, 12)).toBe(22);
});

test("return two numbers added", () => {
  expect(mathModule.add(1.45, 3.56)).toBeCloseTo(5.01);
});

test("return two numbers added", () => {
  expect(mathModule.subtract(100, 13)).toBe(87);
});

test("return two numbers added", () => {
  expect(mathModule.subtract(23, 5)).toBe(18);
});

test("return two numbers added", () => {
  expect(mathModule.divide(15, 3)).toBe(5);
});

test("return two numbers added", () => {
  expect(mathModule.divide(24, 24)).toBe(1);
});

test("return two numbers added", () => {
  expect(mathModule.multiply(45, 2)).toBe(90);
});

test("return two numbers added", () => {
  expect(mathModule.multiply(2, 2341)).toBe(4682);
});
