function zero(operator) {
    return operator ? operator(0) : 0;
}

function one(operator) {
    return operator ? operator(1) : 1;
}

function two(operator) {
    return operator ? operator(2) : 2;
}

function three(operator) {
    return operator ? operator(3) : 3;
}

function four(operator) {
    return operator ? operator(4) : 4;
}

function five(operator) {
    return operator ? operator(5) : 5;
}

function six(operator) {
    return operator ? operator(6) : 6;
}

function seven(operator) {
    return operator ? operator(7) : 7;
}

function eight(operator) {
    return operator ? operator(8) : 8;
}

function nine(operator) {
    return operator ? operator(9) : 9;
}

function plus(num1) {
    return function(num2) {
        return num2 + num1;
    }
}

function minus(num1) {
    return function(num2) {
        return num2 - num1;
    }
}

function times(num1) {
    return function(num2) {
        return num2 * num1;
    }
}

function dividedBy(num1) {
    return function(num2) {
        return num2 / num1;
    }
}