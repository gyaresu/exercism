module.exports = function(word, list) {
    return list.filter(function(each) {
        return word === each;
    });
};