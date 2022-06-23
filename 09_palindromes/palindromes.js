//convert string to an array of chars
//if reading array from start to finish === reading array from end to start, then true. else false

const palindromes = function (string) {
    let stnString = string.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let aReverse = stnString.split("").reverse();
    let rvrString = aReverse.join("");
    if(stnString === rvrString){
        return true;
    }
    else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
