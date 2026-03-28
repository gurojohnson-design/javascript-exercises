const totalIntegers = function(arr) {
    // return undefined for anything that isn't an array or plain object
    if (typeof arr !== 'object' || arr === null || typeof arr === 'function') {
        return undefined;
    }

    // normalize: if it's a plain object, work with its values
    const items = Array.isArray(arr) ? arr : Object.values(arr);

    let total = 0;

    for (let val of items) {
        if (Array.isArray(val)) {
            total += totalIntegers(val);
        } else if (typeof val === 'object' && val !== null) {
            total += totalIntegers(Object.values(val));
        } else if (Number.isInteger(val)) {
            total++;
        }
    }

    return total;
};

module.exports = totalIntegers;


// need to check if its an array or an object
// if its an array check that its first value isnt an array
// if it is then recurse function it
// if its not then check value is integer and update total

// if its an object need to check if value is obj
// if it is then recurse function into it
// if its not then check if value is integer and recurse into it
  
// Do not edit below this line
module.exports = totalIntegers;