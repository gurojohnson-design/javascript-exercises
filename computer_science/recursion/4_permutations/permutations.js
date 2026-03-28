const permutations = function(input) {
    let result = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), m.concat(next));
            };
        }
    };
    permute(input);
    return result;
}


// Do not edit below this line
module.exports = permutations;
