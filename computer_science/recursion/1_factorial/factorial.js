const factorial = function(x) {
    if (typeof x !== 'number' || !Number.isInteger(x) || x < 0) {
        return undefined;
    } else if (x == 0) {
        return 1;
    } return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = factorial;