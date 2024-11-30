let num1;
let num2;
let operator;



const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach(btn => {
    document.addEventListener("click", e => {
        let selected = e.target.innerText;
        populateDisplay(selected);
    })
})


function populateDisplay(selectedBtn) {
}

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