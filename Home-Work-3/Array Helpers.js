Array.prototype.square = function() {
    return this.map(function(e) {
        return e * e
    })
};
Array.prototype.cube = function() {
    return this.map(function(e) {
        return e * e * e
    })
};
Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
        return a + b
    })
};
Array.prototype.average = function() {
    return (this.reduce(function(a, b) {
        return a + b
    }, 0) / this.length)
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