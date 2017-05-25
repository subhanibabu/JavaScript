var Cat = (function() {
    var totalWeight = 0,
        count = 0;

    function Cat(name, weight) {
        if (typeof name == 'undefined' || typeof weight == 'undefined') {
            throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
        }
        this.name = name;
        Object.defineProperty(this, 'weight', {
            get: function() {
                return weight;
            },
            set: function(value) {
                totalWeight -= weight - value;
                weight = value;
            }
        });
        totalWeight += weight;
        count += 1;
    }
    Cat.averageWeight = function() {
        return totalWeight / count;
    };
    return Cat;
}());
