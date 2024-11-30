let num1 = 0;
let num2 = 0;
let operator;



function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        alert("Not so fast, funny guy! No dividing by zero, let's be cool.");
        return 0;
    }
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}