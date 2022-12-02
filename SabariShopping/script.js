"use-strict";
//let randomNum = Math.floor(math.random()*(max-min+1))+min;
let randomNum;
let guessNumber = document.querySelector(".number");
let checkBtn = document.getElementById("checkBtn");
let inputField = document.querySelector(".guess");
let messageResult = generateRandomNumber();
function generateRandomNumber() {
  let randomNum = Math.floor(Math.random() * 20) + 1;
  guessNumber.textContent = randomNum;
}

let checkGuessNumber = function () {
  let inputValue = inputField.value;
  console.log(inputValue);
  if (inputValue === randomNum) {
    messageResult.textContent = "correct Guess";
  } else if (inputValue < randomNum) {
    messageResult.textContent = "Guess is low";
  } else if (inputValue > randomNum) {
    messageResult.textContent = "Guess is High";
  }
};
checkBtn.addEventListener("click", checkGuessNumber);
