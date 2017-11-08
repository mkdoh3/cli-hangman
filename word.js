//  * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data


//pick a word to be guessed. split it into each letter that needs to be guessed and display the appropriate blank space placehodlers 




const words = {
    wordBank: ["Darth Vader", "Leia Organa", "Luke Skywalker", "Han Solo", "Chewbacca", "Boba Fett", "Lando Calrissian", "Admiral Akbar"],
    randomWord: function () {
        //pick a random word from the word bank
        let word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        //add functionality to avoid repeating words twice in a row?
        return word
    }
};









console.log(getWord.currentWord)
