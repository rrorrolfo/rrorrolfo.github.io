
// TOGGLE MENU

const $menu = $("#navicon");
const $nav = $("nav");

$menu.click( () => {
    $nav.toggle("slide", {direction: "right"});
})

window.addEventListener("resize", () => {
    if (window.screen.width > 768) {
        $nav.show;
    }
})

// CHANGE PATH OF SVGs WHEN HOVER

const nav = document.querySelector("nav");
const menu_icons = document.querySelectorAll(".nav_icon");
const icon_ovelays = document.querySelectorAll(".nav_overlay");
