var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.replace(/ /g, '') === '') {
    return 'Fine. Be that way!'
  } else if (input === input.toUpperCase() && /[a-z]/i.test(input)) {
    return 'Whoa, chill out!';
  } else if (input.slice(-1) === '?') {
    return 'Sure.'
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
