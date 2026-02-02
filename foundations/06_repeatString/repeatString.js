const repeatString = function(string, num) {
    let repString = '';
    if (num >= 0) {
        
        for (i = 1; i <= num; i++) {
            repString += string;
        }
    } else return 'ERROR';
return repString;
};



// Do not edit below this line
module.exports = repeatString;
