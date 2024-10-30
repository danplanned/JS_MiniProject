const resultText = document.getElementsByClassName("result-text")[0];

let storedValue = null;
let operator = null;

function onNumberPressed(number) {
  if (number === ".") {
    if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes("."))
      return;
  }

  resultText.innerHTML += number.toString();
}

function canOperate() {
  return resultText.innerHTML.length >= 1;
}

function operate(number) {
  let result;

  switch (operator) {
    case "+":
        result = storedValue + number;
      break;

    case "-":
        result = storedValue - number;
      break;

    case "x":
        result =  storedValue * number;
      break;

    case "/":
        result =  storedValue / number;
      break;
  }

  resultText.innerHTML = result;
  storedValue = null;
  operator = null;
}

function onOperationPressed(operation) {
  const number = parseFloat(resultText.innerHTML);

  if (!canOperate()) return;

  if (operation === "=" && storedValue !== null) {
    return operate(number);
  } else if (operation === "c") {
    storedValue = null;
    operator = null;
  } else {
    operator = operation;
    storedValue = number;
  }

  resultText.innerHTML = "";
}
