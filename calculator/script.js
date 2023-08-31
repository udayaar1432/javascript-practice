// calculator.js

let currentInput = '';
let currentOperator = '';
let currentResult = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function clearInput() {
    currentInput = '';
    currentOperator = '';
    currentResult = '';
    document.getElementById('result').value = '';
}

function performOperation(operator) {
    if (currentOperator !== '') {
        calculateResult();
    }
    currentOperator = operator;
    currentResult = currentInput;
    currentInput = '';
}


function calculateResult() {
    let operand1 = parseFloat(currentResult);
    let operand2 = parseFloat(currentInput);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '%':
            result = operand2;
            break;
        case 'cos':
            result = Math.cos(operand2)
            break;
        case 'sin':
            result = Math.sin(operand2)
            break;
        case 'tan':
            result = Math.tan(operand2)
            break;
        case 'tan':
            result = Math.cot(operand2)
            break;
        case 'tan':
            result = Math.sec(operand2)
            break;
        case 'tan':
            result = Math.csc(operand2)
            break;
    }

    currentInput = result.toString();
    currentOperator = '';
    currentResult = '';
    document.getElementById('result').value = currentInput;
}
