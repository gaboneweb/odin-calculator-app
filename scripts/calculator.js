const buttons = document.querySelector('.buttons');
const expression = document.querySelector('.expression');
const decimal = document.getElementById(".");

//Initialise the values
let firstValue = '';
let secondValue = '';
let operator = '';

//Boolean to keep track whether its a new evaluation or not
let isNewEvaluation = true;


function add(firstNumber, secondNumber){
      return firstNumber + secondNumber;
}


function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}



function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}


function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}


function clear(){
    expression.textContent = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    decimal.disabled = false;
}



function addToExpression(value){
    expression.textContent += value;
}


function evaluateExpression(num1, num2 , operator){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '÷':
            return divide(num1, num2);
        case '-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
    }
}


function parseNumber(num){
    if(num.includes("%")){
        return evaluateExpression(parseFloat(num.replace("%","")), 100, '÷');;
    }else if(num.includes('.')){
        return parseFloat(num);
    }else{
        return parseInt(num);
    }
}

function backSpace(){
    let currentValue = expression.textContent;
    if(currentValue !== ''  && currentValue[currentValue.length- 1] === '.'){
        decimal.disabled = false;
    }
    expression.textContent = expression.textContent.slice(0, -1);
}


buttons.addEventListener('click', (event) => {

    switch(event.target.id){
        case 'AC':
            clear();
            break
        case '=':
            secondValue = expression.textContent;
            decimal.disabled = false;
            expression.textContent = evaluateExpression(parseNumber(firstValue),parseNumber(secondValue), operator);
            firstValue = expression.textContent;
            break;
        case 'backspace':
            backSpace();
            break;
        case '.':
            console.log(expression.textContent);
            if(expression.textContent !== ''){
                decimal.disabled = true;
                addToExpression(event.target.id);
            }
            break;
        case '%':
            addToExpression(event.target.id);
            expression.textContent = parseNumber(expression.textContent);
            break;
        default:
            if(event.target.className.includes('number')){
                addToExpression(event.target.id);
                
            }else{
                operator = event.target.id;
                firstValue = expression.textContent;
                decimal.disabled = false;
                expression.textContent = '';
            } 
    }
});