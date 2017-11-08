//pick a word to be guessed. split it into each letter that needs to be guessed and display the appropriate blank space placehodlers 




const getWord = {
    wordBank: ["Darth Vader", "Leia Organa", "Luke Skywalker", "Han Solo", "Chewbacca", "Boba Fett", "Lando Calrissian", "Admiral Akbar"],
    previousWord: '',
    pickWord: function () {
        //pick a random word from the word bank
        let word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        //add functionality to avoid repeating words twice in a row?
        return word
    }
};









console.log(getWord.currentWord)
