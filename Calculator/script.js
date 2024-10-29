const resultText = document.getElementsByClassName("result-text")[0];

function onNumberPressed(number){
    if(number === "."){
        if((resultText.innerHTML.length===0) && returnText.innerHTML.includes("."))
            return;
        
    }

    resultText.innerHTML += number.toString();
}

