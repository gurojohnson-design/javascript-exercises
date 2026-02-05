const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let difference = a - b;
  return difference;
};

const sum = function(arr) {
	const sumAll = arr.reduce((total, currentValue) => total + currentValue, 0);
  return sumAll;
  };

const multiply = function(arr) {
  const multiplyAll = arr.reduce((total, currentvalue) => total * currentvalue, 1);
  return multiplyAll;
};

const power = function(a, b) {
	let power = a ** b;
  return power;
};

const factorial = function(num) {
  if (num < 0) {
    alert('This number is imaginary');
  } else if (num == 0 || num == 1) {
    return 1;
  } else {
    let result = 1;
	for (let i = 2; i <= num; i++) {
    result *= i;
  } return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
