var Bob = function() {};

Bob.prototype.hey = function(input) {

    if (/[A-Za-z]/.test(input) && input === input.toUpperCase()) {
        return 'Whoa, chill out!';
    } else if (/\?$/.test(input)) {
        return 'Sure.';
    } else if (!input) {
        return 'Fine. Be that way!';
    } else {
        return 'Whatever.';
    }
};

module.exports = Bob;