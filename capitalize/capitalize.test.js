const capitalize = require("./capitalize.js");

test("first character of a string is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("first character of a string is capitalized", () => {
  expect(capitalize("odin")).toBe("Odin");
});

test("first character of a string is capitalized", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});
