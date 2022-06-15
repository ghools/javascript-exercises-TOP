const removeFromArray = function(arrayOG, ...removed ) {;
    return arrayOG.filter(remover => !removed.includes(remover));
};

// Do not edit below this line
module.exports = removeFromArray;
