console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector('[data-js="numberA"]');
const numberB = document.querySelector('[data-js="numberB"]');
const addOperator = document.querySelector('[data-js="add"]');
const subOperator = document.querySelector('[data-js="subtract"]');
const multiplyOpertor = document.querySelector('[data-js="multiply"]');
const divideOperator = document.querySelector('[data-js="divide"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result = 0;

  // --v-- write your code here --v--
  // addition:
  if (addOperator.checked) {
    result = add(parseInt(numberA.value), parseInt(numberB.value));
  } else if (subOperator.checked) {
    result = subtract(parseInt(numberA.value), parseInt(numberB.value));
  } else if (multiplyOpertor.checked) {
    result = multiply(parseInt(numberA.value), parseInt(numberB.value));
  } else {
    result = divide(parseInt(numberA.value), parseInt(numberB.value));
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
