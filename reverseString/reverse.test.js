const reverse = require("./reverse.js");

test("returns a reversed string", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("returns a reversed string", () => {
  expect(reverse("taco")).toBe("ocat");
});

test("returns a reversed string", () => {
  expect(reverse("yo")).toBe("oy");
});
