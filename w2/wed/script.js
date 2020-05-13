let guessMax = 7;
let guessCount = 0;
let hiddenNumber = Math.floor(Math.random() * 100);
let history = "";
let historyArray = [];

let input = document.getElementById('input-number');
let guessResult = document.getElementById('guess-result');
let guessRemain = document.getElementById('guess-remain');
let btnGuess = document.getElementById('btn-guess');
let txHistory = document.getElementById('guess-history');

guessRemain.textContent = "Guess remains: " + guessMax;

function onGuess() {
    let value = input.value
    console.log("include "  + (historyArray.includes(value)));
    if (isNaN(parseInt(value))) {

    } else if (historyArray.includes(value)) {
        alert("Number has been guessed before");
    } else {
        guessCount += 1
        guessRemain.textContent = "Guess remains: " + (guessMax-guessCount)
        
        historyArray.push(value);

        if (value > hiddenNumber) {
            guessResult.textContent = "Your guess is greater than the number";
        } else if (value < hiddenNumber) {
            guessResult.textContent = "Your guess is smaller than the number";
        } else {
            guessResult.textContent = "Your guess is correct. Restart game by Reset button";
            btnGuess.setAttribute('disabled', 'disabled');
        }
        history = history + value + "  ";
        txHistory.textContent = history;
        
        if (guessMax - guessCount == 0) {
            guessResult.textContent = "You have no guess left. The actual number is " + hiddenNumber;
            btnGuess.setAttribute('disabled', 'disabled');
        }
    }
}

function onReset() {
    historyArray = [];
    history = "";
    btnGuess.removeAttribute('disabled');
    guessCount = 0;
    hiddenNumber = Math.floor(Math.random() * 100);
    input.value = ""
    txHistory.textContent = "";
    guessResult.textContent = "Result: ";
    guessRemain.textContent = "Guess remains: " + guessMax;
}