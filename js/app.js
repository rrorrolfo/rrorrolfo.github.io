
// TOGGLE MENU

const $menu = $("#navicon");
const $nav = $("nav");

$menu.click( () => {
    $nav.toggle("slide", {direction: "right"});
})

// CHANGE PATH OF SVGs WHEN HOVER

const nav = document.querySelector("nav");
const menu_icons = document.querySelectorAll(".nav_icon");
const icon_ovelays = document.querySelectorAll(".nav_overlay");

nav.addEventListener("mouseenter", (event) => {
    console.log(event.target);
})