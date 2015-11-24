var thirdFunction = {};
var first = require('./first');
var second = require('./second');
thirdFunction.randomNum = function() {
  return second(first(100, 100000000));
	};

thirdFunction.accountBalance = function() {
  return 'Account balance: \n';
};

module.exports = thirdFunction;
