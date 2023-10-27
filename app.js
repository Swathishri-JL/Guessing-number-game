let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let guessText;

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber <= 0 || guessedNumber > 100) {
        guessText = "Oops! Seems that you've entered an invalid number. Retry with number in the range 1-100.";
        gameResult.style.backgroundColor = "red";
    } else if (guessedNumber === randomNumber) {
        guessText = "Congratulations! You guessed the number right!";
        gameResult.style.backgroundColor = "green";
    } else if (guessedNumber < randomNumber) {
        guessText = "Too Low! Try again with a greater Number!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber > randomNumber) {
        guessText = "Too High! Try again with a lesser Number!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    console.log(guessText)
    gameResult.textContent = guessText;
}