module.exports = function(phrase) {
    var words = phrase.replace('\n', ' ').replace('\t', ' ').split(' ').
        filter(function(each) { return each.length; });
    var count = {};
    words.map(function(word) {
        !+count[word] ? count[word] = 1: ++count[word];
    });
    return count;
};