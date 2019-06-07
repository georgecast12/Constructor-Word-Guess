//Instructions:
// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//___________________________________________________________________________

//Create constructor function "Letter" that includes the values to store and conditional statement to return if the underliying character has been guessed or not and what it will return . If the character matches the underlying variable the boolean shall be updated "true".

function Letter(value) {
  // A string value to store the underlying character for the letter
  this.letter = value;
  // A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;

  // function verifies
  this.character = function() {
    //if the input equals the underlying value, then return value.
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else if ((this.guessed = false)) {
      return "_";
    } else {
      return this.letter;
    }
  };

  this.guess = function(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  };
}

module.export = Letter;
