const buttons = document.querySelector('.buttons');
const expression = document.querySelector('.expression');


function clear(){
    expression.textContent = '';
}


function addToExpression(value){
    expression.textContent += value;
}


function evaluateExpression(){
    console.log("Fuction to be done");
}

function backSpace(){
    expression.textContent = expression.textContent.slice(0, -1);
}


buttons.addEventListener('click', (event) => {

    switch(event.target.id){
        case 'AC':
            clear();
            break
        case '=':
            evaluateExpression();
            break;
        case 'backspace':
            backSpace();
            break;
        default:
            addToExpression(event.target.id);
    }
});