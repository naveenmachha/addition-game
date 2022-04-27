let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");
let userInputElement = document.getElementById("userInput");


function restartButton() {
    let no1 = Math.ceil(Math.random() * 100);
    let no2 = Math.ceil(Math.random() * 100);
    firstNumber.textContent = no1;
    secondNumber.textContent = no2;
    gameResult.textContent = "";
    userInputElement.value = "";
}
restartButton();

function checkButton() {
    let ans = parseInt(userInputElement.value);
    let calculatedAns = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);
    if (ans === calculatedAns) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}