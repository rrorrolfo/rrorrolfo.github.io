// VARIABLES

const overlay = document.querySelector("#overlay");
const title = document.querySelector(".title");
const start_btn = document.querySelector("#btn__reset");
const phrase_to_guess = document.querySelector("#phrase ul");
const keyboard = document.querySelector("#qwerty");
const letters = document.querySelectorAll(".key");
const game__over_message = document.querySelector("#game-over-message");

let game = "";
let game_phrase = ""; 

//////// STARTING THE GAME ///////

//event listener for start game button 
start_btn.addEventListener("click", () => {

    resetDisplay();

});

/////// KEYBOARD FUNCTIONALITY ///////

//event listener for the keyboard keys
keyboard.addEventListener("click", (event) => {

    
    

    //If the target is a letter on the keyboard the markbutton function is called
    if (event.target.className === "key") {

    // letter clicked on the keyboard
    const flag_letter = event.target.textContent;

        markButton(flag_letter);
    
    }

});

window.addEventListener("keyup", (event) => {

    // letter clicked on the keyboard
    const flag_letter = event.key;
    //regular expression for validating that a letter is clicked
    const only_letters = string => /^[a-zA-Z]+$/.test(string);
    // checks to see if the letter pressed value is pressed for the first time
    const unique_letter = flag_letter => {
        
        let status = "";

        letters.forEach(letter => {

            if(letter.textContent === flag_letter) {

                //if it is second time false is returned
                if (letter.disabled === true) {
                    status = false;
                //if it is first time true is returned
                } else if (letter.disabled === false) {
                    status = true;
                }
            }

        });

        return status
        
    }

    //Only If the letter pressed on the keyboard is a letter and it is the first time it is pressed the markbutton function will be called
    if (only_letters(flag_letter) === true && unique_letter(flag_letter) === true) {

        //markbutton function is called
        markButton(flag_letter);

    }
    
    
});

//

const markButton = (flag_letter) => {

    //Disables the clicked key on the keyboard
    letters.forEach(letter => {

        if (letter.textContent === flag_letter) {
            letter.disabled = true;
        }

    });
    //Calls the method that will asses the selection of the letter
    game.handleInteraction(flag_letter);
    
}

// 

const resetDisplay = () => {

    //Resets decoration of all keyboard keys
        letters.forEach(letter => {
            letter.className = "key";
            letter.disabled = false;
        });
    //Resets to five lifes
    const lifes = document.querySelectorAll(".tries img");
        lifes.forEach(item => item.setAttribute("src", "images/liveHeart.png"));
    //Hides overlay when start button is clicked
    overlay.style.display = "none";
    //Creates new instance of a Game (game object)
    game = new Game();
    //Adds the phrase to the board
    game.startGame();

}