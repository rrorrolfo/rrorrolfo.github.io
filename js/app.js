
// TOGGLE MENU

const $menu = $("#navicon");
const $nav = $("nav");

$menu.click( () => {
    $nav.toggle("slide", {direction: "right"});
});

// SHOW CTAS IN WELCOME

const $ctas = $("#welcome a");
const $subtitle = $("#welcome h2");

$ctas.hide().delay(3100).toggle("fade");
$subtitle.hide().delay(2850).toggle("fade");

// POP UP MESSAGE - PROJECTS

    const $pop_msg = $(".pop_msg");
    const $close_msg = $(".close_msg");

    $pop_msg.delay(600).show(600);

    $close_msg.click(() => {
        $pop_msg.hide(300);
    });
