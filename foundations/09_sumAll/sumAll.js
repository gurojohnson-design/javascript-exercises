const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        let sum = 0;
        if (a < b) {
            for (i = a; i <= b; i++) {
                sum += i;
            }
        } else if (b < a) {
            for (i = b; i <= a; i++) {
                sum += i;
            }
        } return sum;
    } else return 'ERROR'
};


// Do not edit below this line
module.exports = sumAll;
