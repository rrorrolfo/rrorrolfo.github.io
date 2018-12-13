
class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

    //adds letter placeholders to the display when the game starts.
    addPhraseToDisplay (phrase) {
        
        //holds array of letters
        const a = [];
        //holds list items with letters to display
        const b = [];

        //Iteration for separating each phrase in single letters and add each letter to variable "a"
       for ( let i = 0; i < phrase.length; i += 1) {
        a.push(phrase.charAt(i));
       }

       //Iteration for creating the list items that will hold each letter
       const c = a.map(letter => {

        if (letter !== " ") {
         b.push(`<li class="hide letter">${letter}</li>`);
        } else {
         b.push(`<li class="hide space">${letter}</li>`);
        }
       });

       return b.join("");
    }

    //checks to see if letter selected by player matches a letter in the phrase.
    // flag_letter param is the letter clicked on the keyboard
    checkLetter (flag_letter) {

        let flag = 0;

            //hidden phrase to be compared against the chosen letter
        const flag_phrase = document.querySelectorAll(".letter");

            //Iteration over the hidden phrase
            flag_phrase.forEach(letter => {

                let x = letter;
                let letter_to_compare = letter.textContent;

                //compares if letter match
                if (letter_to_compare === flag_letter) {
                //if the letters match, the letter will appear
                    this.showMatchedLetter(letter); 
                    //The selected letter will be decorated
                    for (let i = 0; i < letters.length; i +=1) {
                        if (letters[i].textContent === flag_letter) {
                            letters[i].className = "key chosen";
                        }
                    }
                    //Will add one if there is match
                    flag += 1;
                } 
            });


        //If there has been no match a missed will be added
        if (flag === 0) {
            game.missed += 1;
            //Selected letter will be decorated with red color
            for (let i = 0; i < letters.length; i +=1) {
                if (letters[i].textContent === flag_letter) {
                    letters[i].className = "key wrong";
                }
            }
        }

    }

    //reveals the letter(s) on the board that matches player's selection.
    //"item" param is the item that the class will be changed from hide to show
    showMatchedLetter (item) {
        //displays the matched letters
        item.className = "show letter";
    }

}