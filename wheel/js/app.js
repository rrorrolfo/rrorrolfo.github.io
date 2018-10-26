////////////  VARIABLES  /////////////

const phrases = [
    "why so serious",
    "bond James Bond",
    "i ll be back",
    "here is Johnny",
    "my precious",
];


const start_screen = document.querySelector("#overlay");
const game_start = document.querySelectorAll(".btn__reset")[0];
const keyboard = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");


let missed = 0;

//////////  FUNCTIONS  //////////////

/// selects randonly the phrase when the person clicks the start game button

function getRandomPhraseAsArray(arr) {
    var a =  arr[Math.floor(Math.random() * 6)];
    const b = [];
    
    for (let i = 0; i < a.length; i += 1) {
        b.push(a.charAt(i));
    }

    return b
}

/// PUTS THE HIDDEN PHRASE ON THE BOARD

function addPhraseToDisplay(arr){

    for (let i = 0; i < arr.length; i += 1) {
        const letter = document.querySelector("#phrase ul");
        const li = document.createElement("li");
        
        letter.appendChild(li);
        li.textContent = arr[i].toUpperCase();

        if (li.textContent !== " ") {
            li.className = "letter"
        } else {
            li.className = "space"
        }
    }


}

///// STARTS THE GAME

game_start.addEventListener("click", () => {
    start_screen.style.display = "none";

    // Reset the game

        // Resets the phrase to guess
    const letter = document.querySelector("#phrase ul");
    letter.textContent = "";

        // Resets styling of buttons to default
    const reset_keyboard = document.querySelectorAll(".keyrow button");

    for (let i = 0; i < reset_keyboard.length; i += 1) {
        reset_keyboard[i].className = " ";
        reset_keyboard[i].removeAttribute("disabled");
    }

        // Resets hearts images to default (5 lifes)

    const tries = document.querySelectorAll(".tries");
            
    for (let i = 0; i < tries.length; i += 1) {
        tries[i].firstChild.setAttribute("src","images/liveHeart.png");
    }

        // Reset missed attempts score

        missed = 0;
    
    // SETS PHRASE TO GUESS
    let a = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(a);

});


///// CHECKS THE LETTER 

function checkLetter (chosen_letter) {
    const selected_letter = chosen_letter.toUpperCase();
    const letters = document.querySelectorAll(".letter");
    let letterFound = "null";

    for (let i = 0; i < letters.length; i += 1) {
        
         if (selected_letter === letters[i].textContent) {
            letterFound = selected_letter;
            letters[i].className += " show";
        }
    }

    return letterFound
}

//// CHECKS IF PLAYER GUESSED CORRECT ANSWER

function checkWin() {
    const letters = document.querySelectorAll(".letter");
    const shown_letters = document.querySelectorAll(".show");
    const status_message = start_screen.firstChild.nextElementSibling;
    const cta_replay = start_screen.lastChild.previousElementSibling;
    
    if (letters.length === shown_letters.length) {
        start_screen.style.display = "flex";
        start_screen.className = "win";
        status_message.textContent = "YOU WON!!!";
        cta_replay.textContent = "Play Again";
    } 
    
    if (missed >= 5) {
        start_screen.style.display = "flex";
        start_screen.className = "lose";
        status_message.textContent = "YOU LOST :(";
        cta_replay.textContent = "Play Again";
    }
}

/// GAMEPLAY EVENT STARTER

keyboard.addEventListener("click", (event) => {

    const a = event.target;
    const b = a.textContent;

    if (a.tagName == "BUTTON") {
        a.className = "chosen";
        a.setAttribute("disabled", true);
        const c = checkLetter(b);

        if (c === "null") {
            a.className += " chosen_mistaken"; 
            const tries = document.querySelectorAll(".tries");
            tries[missed].firstChild.setAttribute("src","images/lostHeart.png");
            missed += 1;

        }
        
    }

    checkWin();

});

