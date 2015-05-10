var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(arr){
    var word = this.word;
    // re-read the problem. you need to return possible anagrams

    // return arr.filter(function(each) {
    //     return each === word;
    // });
};

module.exports = Anagram;