module.exports = function(phrase) {
    var words = phrase.split(' ');
    var count = {};
    words.map(function(word) {
        !count[word] ? count[word] = 1: ++count[word];
    });
    return count;
};