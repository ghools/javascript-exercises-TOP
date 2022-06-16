const leapYears = function(year) {
    let leapYear;

    if(year % 400 === 0) {
        leapYear = true;
        return leapYear;
    }
    if(year % 100 === 0) {
        leapYear = false;
        return leapYear;
    }
    if(year % 4 === 0) {
        leapYear = true;
        return leapYear;
    }
    else {
        leapYear = false;
        return leapYear;
    }
};

// Do not edit below this line
module.exports = leapYears;
