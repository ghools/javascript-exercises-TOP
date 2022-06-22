const add = function(a, b) {
  let sum = a +b;
  return sum;
	
};

const subtract = function(a, b) {
  let sum = a -b;
  return sum;
};

const sum = function(a) {
  let sum =0;
  for(let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  if(a[0] === NaN){
    return -1;
  }
  let sum = 1;
  for(let i = 0; i <a.length; i++) {
    sum *= a[i];
  }
  return sum;
};

const power = function(a, b) {
  let total = a**b;
  return total;
};

const factorial = function(a) {
  let sum = 1;
  if(a < 0) {
    return -1;
  }
  while(a > 1){
    sum *= a;
    a--
  }
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
