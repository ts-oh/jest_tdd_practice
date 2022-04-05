const caesarCipher = require("./caesarcipher");

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("zebra fish", 25)).toBe("zebra fish");
});

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("hello", 13)).toBe("uryyc");
});

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("caesar cipher", 7)).toBe("jhlzhy jpwoly");
});

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("arizona", 0)).toBe("arizona");
});

test("return a encoded string by shifting character", () => {
  expect(caesarCipher("arizona", 25)).toBe("arizona");
});
