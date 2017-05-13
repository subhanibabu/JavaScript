var sum = 0,
    count = [];

function Cat(name, weight) {

    if (typeof name == 'undefined' || typeof weight == 'undefined') {
        throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
    }
    this.name = name;
    this.weight = weight;
    sum += this.weight;
    count.push(this);
};

Object.defineProperty(Cat, "sum", {
    get: function() {
        return sum;
    },
    set: function() {
        sum = sum + cat.weight;
    }
});

Object.defineProperty(Cat, "averageWeight", {
    get: function() {
        return function() {
            return count ? sum / count.length : 0;
        };
    }
});
