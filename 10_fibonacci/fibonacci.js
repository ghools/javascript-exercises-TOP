const fibonacci = function(n) {
    if(n < 0) {
        let neg = "OOPS";
        return neg;
    }
    if(n < 2){ 
        number = parseInt(n, 10);
        return number;
    }
    return fibonacci(n-1) + fibonacci (n-2);
};

// Do not edit below this line
module.exports = fibonacci;
