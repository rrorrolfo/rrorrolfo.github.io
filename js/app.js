
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

// POP UP MESSAGE - PROJECTS

    const $pop_msg = $(".pop_msg");
    const $close_msg = $(".close_msg");

    $pop_msg.delay(600).show(600);

    $close_msg.click(() => {
        $pop_msg.hide(300);
    });
