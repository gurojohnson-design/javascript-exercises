const palindromes = function (string) {
    const strippedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedSting = strippedString.split('').reverse().join('');
    return strippedString === reversedSting;
};





//make sure its a string
//strip it to its letters
//reverse it
//compare that their equal
//reutrn true or false


// Do not edit below this line
module.exports = palindromes;
