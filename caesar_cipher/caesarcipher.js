function caesarCipher(string, shift) {
  let strArray = string.split("");
  let numShift = [];
  let encodeArray = [];

  if (shift < 0 || shift > 25) {
    return "shift must be from 0 to 25";
  }

  strArray.map((c) => {
    let shiftNum;

    if (shift === 25) {
      shiftNum = c.charCodeAt() + 0;
    } else {
      shiftNum = c.charCodeAt() + shift;
    }

    if (c === " ") {
      shiftNum = 32;
    }

    if (shiftNum > 122) {
      numShift.push(shiftNum - 122 + 97);
    } else {
      numShift.push(shiftNum);
    }
  });

  numShift.map((n) => {
    encodeArray.push(String.fromCharCode(n));
  });

  return encodeArray.join("");
}

module.exports = caesarCipher;
