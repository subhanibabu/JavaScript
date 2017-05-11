function zero(operator) {
    return number(operator, 0);
}

function one(operator) {
    return number(operator, 1);
}

function two(operator) {
    return number(operator, 2);
}

function three(operator) {
    return number(operator, 3);
}

function four(operator) {
    return number(operator, 4);
}

function five(operator) {
    return number(operator, 5);
}

function six(operator) {
    return number(operator, 6);
}

function seven(operator) {
    return number(operator, 7);
}

function eight(operator) {
    return number(operator, 8);
}

function nine(operator) {
    return number(operator, 9);
}

function number(operator, value) {
    return operator ? operator(value) : value;
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
