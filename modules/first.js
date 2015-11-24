var whatever = function(min, max) { // generate random whole numbers between min and max.
  return Math.floor(Math.random() * (1 + max - min) + min);
};
module.exports = whatever;
