//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

var items = input.split('');

if (items.filter(function(i) { return i === '?';}).length > 0) {
    return 'Sure.';
} else if (items.filter(function(i) { return i === '!';}).length > 0) {
    return 'Whoa, chill out!';
} else {
    return 'Whatever.';
}

};

module.exports = Bob;