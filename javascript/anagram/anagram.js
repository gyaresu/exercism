var exportNewAnagram = function(word) {
    return new Anagram(word);
};

var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(arr){
    var sorted = this.word.toLowerCase().split('').sort().join('');

    return arr.filter(function(each) {
        return each.toLowerCase().split('').sort().join('') === sorted;
    });
};

module.exports = exportNewAnagram;