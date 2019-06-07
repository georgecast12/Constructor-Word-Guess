// Instructions:
// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// Letter.js should not require any other files.
// Word.js should only require Letter.js

//___________________________________________________________________________

// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./Word.js");

var wordOptions = [
  "mets",
  "dodgers",
  "yankees",
  "astros",
  "Pirates",
  "Mariners",
  "padres",
  "marlins",
  "giants"
];

var guesses;
var wordsSelected;
var word;
var wordSelected;

function init() {
  wordsSelected = [];
  console.log(
    "Welmcome to Word Guess, try not to fail or three strikes and you're out!"
  );
  console.log("------------------------------------------");
  playGame();
}

function playGame() {
  wordSelected = "";
  guesses = 12;
  if (wordsSelected.length < wordOptions.length) {
    wordSelected = getWord();
  } else {
    // if player wins
    console.log("You know your teams. Cheers!");
  }
  if (wordSelected) {
    word = new Word(wordSelected);
    word.letterBreakdown();
    makeGuess();
  }
}

function getWord() {
  var rand = Math.floor(Math.random() * wordOptions.length);
  var randomWord = wordOptions[rand];
  if (wordsSelected.indexOf(randomWord) === -1) {
    wordsSelected.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  }
}

function makeGuess() {
  var checker = [];
  inquirer
    .prompt([
      {
        name: "guessedLetter",
        message:
          word.update() + "\nGuess a letter!" + "\nGuesses Left: " + guesses
      }
    ])
    .then(data => {
      word.letters.forEach(letter => {
        letter.checkLetter(data.guessedLetter);
        checker.push(letter.getCharacter());
      });
      if (guesses > 0 && checker.indexOf("_") !== -1) {
        guesses--;
        if (guesses === 0) {
          console.log("Third Strike! You're Out.");
        } else {
          makeGuess();
        }
      } else {
        console.log("Home Run! You got it right in the middle");
        console.log(word.update());
        playGame();
      }
    });
}

init();
