const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (sumArray) => sumArray.reduce((accumulator, current) => accumulator + current, 0);

const multiply = (productArray) => productArray.reduce((accumulator, current) => accumulator * current);

const power = (a, b) => a ** b;

const factorial = (n) => {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
