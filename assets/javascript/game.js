

//Incorrect Logic as I hadn't seen the video ND DIDN'T QUITE UNDERSTAND THE GAME!!

// function myFunction() {
//   location.reload();
// alert("wins: 0" + "\nLosses: 0" + "\nGuesses left: 10" + "\nYour Guesses so far: 0");
// }

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = "";
var computerLetter = "";

var messageHTML = document.getElementById("message");
var scoreWinsHTML = document.getElementById("scoreWins");
var scoreLossesHTML = document.getElementById("scoreLosses");
var scoreGuessesLeftHTML = document.getElementById("scoreGuessesLeft");
var userGuessHTML = document.getElementById("userGuess");


function random() {
  computerLetter = (
    String.fromCharCode(
      Math.floor(Math.random() * 26) + 97
    )
  )

}





function reset() {
  wins = 0;
  losses = 0;
  guessesLeft = 10;
  UserGuess = "";

  scoreWinsHTML.textContent = "Wins:" + wins;
  scoreLossesHTML.textContent = "Losses:" + losses;
  scoreGuessesLeftHTML.textContent = "Guesses left:" + guessesLeft;
  userGuessHTML.textContent = "Your Guesses so far:" + userGuess;

}
console.log(guessesLeft);


//generate letter and save to var

// computerLetter = (
//   String.fromCharCode(
//     Math.floor(Math.random() * 26) + 97
//   )
// )
// console.log(computerLetter);

//while (guessesLeft > 0) {
//for (;guessesLeft >0;) {

//for (; guessesLeft > 0;) {


document.onkeyup = function (event) {

  //  // computerLetter = (
  //     String.fromCharCode(
  //       Math.floor(Math.random() * 26) + 97
  //     )
  // )
  console.log(computerLetter);

  // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  userGuess = event.key.toLowerCase();
  console.log(userGuess);

  if (userGuess === computerLetter) {
    wins = wins + 1;
    guessesLeft = guessesLeft - 1;
    scoreWinsHTML.textContent = "Wins:" + wins;
    scoreLossesHTML.textContent = "Losses:" + losses;
    scoreGuessesLeftHTML.textContent = "Guesses left:" + guessesLeft;
    userGuessHTML.appendChild("Your Guesses so far:" + userGuess);

  } else {

    losses = losses + 1;
    guessesLeft = guessesLeft - 1;
    scoreWinsHTML.textContent = "Wins:" + wins;
    scoreLossesHTML.textContent = "Losses:" + losses;
    scoreGuessesLeftHTML.textContent = "Guesses left:" + guessesLeft;
    userGuessHTML.textContent = "Your Guesses so far:" + userGuess;
    console.log(guessesLeft, wins, losses);
  }

  if (guessesLeft === 0) {
    // console.log(guessesLeft);

    messageHTML.textContent = "You are out of guesses! Reset to play again";


  }
  // document.getElementById("reset").addEventListener("click", reset);
}
//}