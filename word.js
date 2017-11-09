//  * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data


const Letter = require("./letter");

function Word(word) {
    this.word = word;
    this.guessesLeft = 8;
}

Word.prototype.toLetters = function () {
    for (let i = 0; i < this.word.length; i++) {
        this[i] = new Letter(this.word[i]);
    }
}

Word.prototype.check = function (guess) {
    for (let i = 0; i < this.word.length; i++) {
        this[i].check(guess)
    }
    this.guessesLeft--;
}

Word.prototype.update = function () {
    this.underscores = "";
    for (let i = 0; i < this.word.length; i++) {
        this.underscores += this[i].display()
    }
}

Word.prototype.stats = function () {
    process.stdout.write('\033c');
    console.log("If you lose, you DIE!\n\n", `${this.underscores}`);
    console.log("\n", `${this.guessesLeft} guesses left!`, "\n")
}

module.exports = Word;
