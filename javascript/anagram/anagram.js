var exportNewAnagram = function(word) {
    return new Anagram(word);
};

var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(arr){
    if (typeof(arr) === 'string')
        arr = Array.prototype.slice.call(process.argv);

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