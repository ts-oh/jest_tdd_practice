function add(a, b) {
  return Math.abs(a + b);
}

function subtract(a, b) {
  return Math.abs(a - b);
}

function divide(a, b) {
  return Math.abs(a / b);
}

function multiply(a, b) {
  return Math.abs(a * b);
}

module.exports = { add, subtract, divide, multiply };
