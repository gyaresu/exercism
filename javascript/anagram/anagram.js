var exportNewAnagram = function(word) {
    return new Anagram(word);
};

var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(arr){
    if (process.argv.length > 1)
        arr = Array.prototype.slice.call(arr);

    var testWord = this.word;
    var sorted = this.word.toLowerCase().split('').sort().join('');

    return arr.filter(function(each) {
        if (each.toLowerCase() === testWord.toLowerCase())
            return false;
        else
            return each.toLowerCase().split('').sort().join('') === sorted;
    });
};

module.exports = exportNewAnagram;