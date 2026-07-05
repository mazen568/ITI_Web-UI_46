let currentInput = "";
let operator = "";
let expression=""
let firstOperand = null;
let display= document.getElementById("Answer");



function EnterNumber(value) {
  currentInput += value;
  expression += value;
  display.value = expression;
}

function EnterOperator(op) {
  if (currentInput === "")  
    return;

  if (firstOperand !== null) {
    EnterEqual();
  }

  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";

  expression += op;
  display.value = expression;
}


function EnterEqual() {
  if (firstOperand === null || currentInput === "") return;

  let secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = secondOperand !== 0 ? firstOperand / secondOperand : "error";
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result;
  expression = currentInput;
  firstOperand = null;
  operator = "";
}

function EnterClear() {
  currentInput = "";
  operator = "";
  firstOperand = null;
  expression = "";
  display.value = "";
}
