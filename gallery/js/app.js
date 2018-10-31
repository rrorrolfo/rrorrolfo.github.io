// VARIABLES:

const search_text = document.querySelectorAll("#photo_gallery a");
const search_input = document.querySelector("#string_to_search");

// FUNCTION:

function search() {
    
    const filt = search_input.value.toUpperCase();

    for (let i = 0; i < search_text.length; i += 1) {

        if (search_text[i].getAttribute("data-title").toUpperCase().indexOf(filt) > -1){

            search_text[i].style.display = "block";
            search_text[i].setAttribute("data-lightbox","image-1");

            }
            else {
                search_text[i].style.display = "none";
                search_text[i].removeAttribute("data-lightbox");

            }
        
    }
}