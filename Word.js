// Instructions:
// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
//___________________________________________________________________________

//Word.js should only require Letter
var Letter = require("./Letter.js");

//Create constructor function "Word" that includes the values for the Word value and and Array of letter that compose the underlying word.

function Word() {
  this.word = word;
  this.letters = [];

  //Function to breakdown the word by characters, and then loop to call the function on each letter of the word
  this.letterBreakdown = function() {
    //split word selected by into each individual character/string
    var wordArr = this.word.split("");
    //loop to perform the same the function on every
    for (var i = 0; i < wordArr.length; i++) {
      var newLetter = new Letter(wordArr[i]);
      this.letters.push(newLetter);
    }
  };

  //verify the letter throught the guess function in "Letter.js"
  this.makeGuess = function(guess) {
    this.letters.forEach(letter => {
      letter.guess(guess);
    });
  };

  //verify the letter throught the Character function in "Letter.js"
  this.update = function() {
    var printedWord = "";
    this.letters.forEach(letter => {
      printedWord = letter.character() + " ";
    });
    return printedWord;
  };
}

module.exports = Word;
