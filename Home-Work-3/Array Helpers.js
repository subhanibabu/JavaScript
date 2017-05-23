Array.prototype.square = function() {
    return this.map(function(e) {
        return Math.pow(e, 2)
    })
};
Array.prototype.cube = function() {
    return this.map(function(e) {
        return Math.pow(e, 3)
    })
};
Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
        return a + b
    }, 0)
};
Array.prototype.average = function() {
    return this.sum() / this.length;
};
Array.prototype.even = function() {
    return this.filter(function(e) {
        return !(e % 2)
    })
};
Array.prototype.odd = function() {
    return this.filter(function(e) {
        return e % 2
    })
};
