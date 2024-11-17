
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }

    modulus(a, b) {
        return a % b;
    }

    power(a, b) {
        return Math.pow(a, b);
    }

    sqrt(a) {
        if (a < 0) {
            throw new Error("Cannot find the square root of a negative number.");
        }
        return Math.sqrt(a);
    }
}

module.exports = new Calculator();
