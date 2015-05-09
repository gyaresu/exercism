module.exports = function(first, second) {
    var f = first.split(''),
        s = second.split(''),
        count = 0;

    if (f.length !== s.length) {
        throw 'DNA strands must be of equal length.';
    }

    for (var i = 0; i < f.length; ++i) {
        if (f[i] !== s[i])
            ++count;
    }

    return count;
};