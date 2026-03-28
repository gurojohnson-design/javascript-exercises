const contains = function(obj, target) {
    for (let key in obj) {
        const val = obj[key];

        // handle NaN specifically since NaN !== NaN
        if (Number.isNaN(target) && Number.isNaN(val)) return true;

        if (val === target) return true;

        if (typeof val === 'object' && val !== null) {
            if (contains(val, target)) return true;
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
