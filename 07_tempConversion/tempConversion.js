const ftoc = function(fehIn) {
  let celOut = (fehIn - 32) * (5/9)
  return Math.round(celOut * 10) / 10;
};

const ctof = function(celIn) {
  let fehOut = celIn * (9/5) + 32;
  return Math.round(fehOut * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
