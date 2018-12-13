
class Game {
    constructor (missed = 0, phrases = [
        "just do it",
        "go for it",
        "one more",
        "finish it",
        "you can",
        "come on",
        "almost there",
        "fail better",
        "try more",
        "work hard"
    ]) {
        this.missed = missed;
        this.phrases = phrases;
    }

    // randomly retrieves one of the phrases stored in the phrases array.
    getRandomPhrase () {
        let chosen_phrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];

        return chosen_phrase
    }

    //checks to see if the button clicked by the player matches a letter in the phrase.
        
        //.If the selected letter matches,  showMatchedLetter() method is called on the phrase and then call the checkForWin() method.
    handleInteraction (flag_letter) {
        
        //checks if clicked letter on the keyboard is in the phrase
            game_phrase.checkLetter(flag_letter);
        //cheks if the player has won
            this.checkForWin();
        //removes lifes if necessary
            this.removeLife();
        //displays respective win/lose message
            this.gameOver();
        
    }

    //removes a life, removes a heart from the board
    removeLife () {

        const lifes = document.querySelectorAll(".tries img");

        for (let i = 0; i <game.missed ; i += 1) {

            const x = lifes[i].getAttribute("src");

            //changes one full heart image for one of an empty heart
            if (x === "images/liveHeart.png") {

                lifes[i].setAttribute("src", "images/lostHeart.png");
                break
                
            }

        }

    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin () {

        //Gets the amount of hidden letters
        const discovered_letters = document.querySelectorAll("li.hide.letter");

        //checks if the game has been won returning boolean value
        if (discovered_letters.length === 0) {
            return true
        } else {
            return false
        }
        
        
    }

    //this method displays a message if the player wins or a different message if they lose.
    gameOver () {

        //Gets the amount of hidden letters
        const discovered_letters = document.querySelectorAll("li.hide.letter");

        //If there are no hidden letters the victory message is shown
        if (discovered_letters.length === 0) {

            game__over_message.textContent = "YOU WON!!!";
            start_btn.textContent = "Play again";
            overlay.className = "win";
            overlay.style.display = "flex";
            title.style.display = "none";

            //IF there are 5 mistakes the game is lost
        } else if (this.missed === 5) {

            game__over_message.textContent = "YOU LOST :(";
            start_btn.textContent = "Play again";
            overlay.className = "lose";
            overlay.style.display = "flex";
            title.style.display = "none";

        }

    }

    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    startGame() {
        //Creates new instance of a phrase (phrase object)
        game_phrase = new Phrase(game.getRandomPhrase());
        // Displays the hidden phrase to be guessed
        phrase_to_guess.innerHTML = game_phrase.addPhraseToDisplay(game_phrase.phrase);
    }
}