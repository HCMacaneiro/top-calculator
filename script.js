let num1;
let num2;
let operator;


const display = document.querySelector("#display");
const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        let selected = e.target.innerText;
        populateDisplay(selected);
    })
})


function populateDisplay(selectedBtn) {
    let parsedBtn = parseInt(selectedBtn, 10);
    // Clear display
    if(isNaN(parsedBtn) && selectedBtn == "C") {
        display.innerText = "";
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        return;
    }
    // Input operator
    else if (isNaN(parsedBtn) && typeof num1 !== "undefined" && typeof num2 == "undefined" && typeof operator == "undefined") {
        if (selectedBtn == "+" || selectedBtn == "-" || selectedBtn == "/" || selectedBtn == "x") {
            operator = selectedBtn;
            display.innerText += ` ${operator}`;
            return;
        }
        else {
            alert("Select a valid operator.");
            return;
        }
    }
    // Input numbers
    else if(!isNaN(parsedBtn)) {
        if(typeof operator == "undefined") {
            if (typeof num1 == "undefined") {
                num1 = selectedBtn;
                display.innerText = num1;
                return;
            }
            else {
                num1 += `${selectedBtn}`;
                display.innerText = `${num1}`;
            }
        }
        else if (typeof operator !== "undefined" && typeof num2 == "undefined") {
            num2 = selectedBtn;
            display.innerText += ` ${num2}`;
            return
            }
            else {
                num2 += `${selectedBtn}`;
                display.innerText = `${num1} ${operator} ${num2}`;
                return
            }
    }
    // Result
    else if (typeof num1 !== "undefined" && typeof num2 !== "undefined" && typeof operator !== "undefined") {
        if (selectedBtn == "=" || selectedBtn == "+" || selectedBtn == "-" || selectedBtn == "/" || selectedBtn == "x") {
            let parsedNum1 = parseInt(num1, 10);
            let parsedNum2 = parseInt(num2, 10);
            let result;
            switch(operator) {
                case "+":
                    result = sum(parsedNum1, parsedNum2);
                    break;
                case "-":
                    result = subtract(parsedNum1, parsedNum2);
                    break;
                case "x":
                    result = multiply(parsedNum1, parsedNum2);
                    break;
                case "/":
                    result = division(parsedNum1, parsedNum2);
                    break;
                default:
                    break;
            }
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            display.innerText = result;
            return;
        }
    }

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