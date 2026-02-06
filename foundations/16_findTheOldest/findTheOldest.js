const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    } return death - birth;
};




const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest
    });
};








//take person object and pull DOB
//subtract DOD or current date from DOB
//return person object for highest age









// Do not edit below this line
module.exports = findTheOldest;
