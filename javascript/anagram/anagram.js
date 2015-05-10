var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(arr){
    var word = this.word.split().sort().join('');

    // re-read the problem. you need to return possible anagrams

    return arr.filter(function(each) {
        return each.split().sort().join('') === word;
    });
};

module.exports = Anagram;