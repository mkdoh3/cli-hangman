// * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

const Word = require("./word");

function Letter(letter) {
    //need to add more validation
    this.letter = letter.toLowerCase(),
        this.guessed = false
}

Letter.prototype.display = function () {
    if (this.guessed) {
        return this.letter
    } else {
        return " _ "
    }
}

Letter.prototype.check = function (guess) {
    if (guess === this.letter) {
        this.guessed = true;
    }
}

module.exports = Letter;
