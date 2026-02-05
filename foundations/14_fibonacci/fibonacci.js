const fibonacci = function(num) {
    let fibArray = [1, 1];
    if (num < 0) {
        return 'OOPS';
    } else if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1
    } else {
    for (let i = 2; i <= num; i++) {
        let nextValue = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
        fibArray.push(nextValue)
    }
    return fibArray[num - 1];
}
};


//new position = (new position - 1) + (new position - 2)

//loop for num

//define first position of the string to be 1
//define a starting number to start adding to which is 1
//loop with i at 0
//add i to number
//update array
//get value at location given


//numbers and stings of numbers are good but negatives are bad






// Do not edit below this line
module.exports = fibonacci;
