const pascal = function(n) {
    if (n < 0) {
        return;
    }

    if (n === 1) return [1];

    const prevRow = pascal(n - 1);

    const newRow = [1];
    for (let i = 1; i < prevRow.length; i++) {
        newRow.push(prevRow[i - 1] + prevRow[i]);
    }
    newRow.push(1);

    return newRow;
};
  
// Do not edit below this line
module.exports = pascal;
