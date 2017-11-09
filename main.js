const Word = require("./word");
const Letter = require("./letter");
const inquirer = require("inquirer");

let rando = {
    wordBank: ['bananas', "naners", 'boonaners'],
    randomWord: function () {
        return this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    }
}

let randomWord = rando.randomWord();

let wordObj = new Word(randomWord);

wordObj.toLetters();

function gameOn() {
    wordObj.update();
    wordObj.stats();
    if (wordObj.word === wordObj.underscores) {
        console.log("Winning!");
        playAgain();
    } else if (wordObj.guessesLeft) {
        inquirer.prompt([
            {
                message: "Pick a letter, any letter!",
                type: "input",
                name: "guess"
            }
        ]).then(function (res) {
            let guess = res.guess;
            wordObj.check(guess);
            gameOn();
        })
    } else {
        console.log("Game Over Man, Game Over!");
        console.log(`The word was: ${wordObj.word}`);
        playAgain()
    }
}

//need to sort out why this isnt working properly

//function playAgain() {
//    inquirer.prompt([
//        {
//            message: "Play again?",
//            tpye: "list",
//            choices: ["Yes", "No"],
//            name: "choice"
//            }
//        ]).then(function (res) {
//        if (res.choice === "Yes") {
//            gameOn();
//        } else {
//            process.exit();
//        }
//    })
//}







gameOn();
