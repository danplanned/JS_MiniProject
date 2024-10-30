const resultText = document.getElementsByClassName("result-text")[0];

function onNumberPressed(number){
    if(number === "."){
        if(resultText.innerHTML.length===0 || resultText.innerHTML.includes("."))
            return;
        
    }

    resultText.innerHTML += number.toString();
}

function onOperationPressed(operation){
    if (operation === "c"){
        resultText.innerHTML = "";
    }
}
