function add(a) {
    var currentSum = a;

    function chain(b) {
        currentSum += b;
        return chain;
    }
    chain.toString = function() {
        return currentSum;
    }
    return chain;
}
