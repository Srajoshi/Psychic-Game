var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = "";
var computerLetter = "";

function randomLetter() {
  computerLetter = (
    String.fromCharCode(
      Math.floor(Math.random() * 26) + 97
    )
  )

}

randomLetter();
console.log("computterLetter:  " + computerLetter);

function reset() {

  guessesLeft = 9;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guesses").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  randomLetter();
  console.log("computterLetter:  " + computerLetter);
}

document.onkeyup = function (event) {

  userGuess = event.key.toLowerCase();
  document.getElementById("guesses").append(userGuess + ", ");

  if (userGuess === computerLetter) {

    wins++;
    console.log("wins: " + wins);
    document.getElementById("wins").innerHTML = wins;
    
    reset();

  } else {
    
    guessesLeft--;
    console.log("Losses : " + losses);
    console.log("Guesses Left; " + guessesLeft);
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    
  }

  if (guessesLeft === 0) {
    console.log(guessesLeft);
    losses++;
    console.log("wins: " + wins);
    document.getElementById("losses").innerHTML = losses;
    reset();
  }
  
};