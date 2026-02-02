const reverseString = function(string) {
    const stringArr = string.split('');
    const reverseString = stringArr.reverse();
    let backwardsString = reverseString.join('');
    return backwardsString;
};

// Do not edit below this line
module.exports = reverseString;
