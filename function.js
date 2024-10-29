console.log('%c 本页面由 SunnyLimc 复刻，Lambda工作室 和 fosu.edu.cn 版权所有', 'color: #0096ff');

var l_location = 1;
var r_location = 1;
function move_button_l() {
    if (l_location == 1) {
        l_location_change_to_2();
    } else if (l_location == 2) {
        l_location_change_to_1();
    }
}
function move_button_r() {
    if (r_location == 1) {
        r_location_change_to_2();
    } else if (r_location == 2) {
        r_location_change_to_3();
    } else if (r_location == 3) {
        r_location_change_to_1();
    }
}
setInterval(move_button_l, 5000);
setInterval(move_button_r, 5000);

function l_location_change_to_1() {
    document.getElementById("content-l-button-1").className =
        "content-menu-button-active";
    document.getElementById("content-l-button-2").className =
        "content-menu-button";
    document.getElementById("content-l-1").className =
        "content-detail-l-active";
    document.getElementById("content-l-2").className = "content-detail-l";
    l_location = 1;
}
function l_location_change_to_2() {
    document.getElementById("content-l-2").className =
        "content-detail-l-active";
    document.getElementById("content-l-1").className = "content-detail-l";
    document.getElementById("content-l-button-2").className =
        "content-menu-button-active";
    document.getElementById("content-l-button-1").className =
        "content-menu-button";
    l_location = 2;
}
document
    .getElementById("content-l-button-1")
    .addEventListener("mouseover", function () {
        l_location_change_to_1();
    });
document
    .getElementById("content-l-button-2")
    .addEventListener("mouseover", function () {
        l_location_change_to_2();
    });

function r_location_change_to_1() {
    document.getElementById("content-r-button-1").className =
        "content-menu-button-active";
    document.getElementById("content-r-button-2").className =
        "content-menu-button";
    document.getElementById("content-r-button-3").className =
        "content-menu-button";
    document.getElementById("content-r-1").className =
        "content-detail-r-active";
    document.getElementById("content-r-2").className = "content-detail-r";
    document.getElementById("content-r-3").className = "content-detail-r";
    r_location = 1;
}
function r_location_change_to_2() {
    document.getElementById("content-r-button-2").className =
        "content-menu-button-active";
    document.getElementById("content-r-button-1").className =
        "content-menu-button";
    document.getElementById("content-r-button-3").className =
        "content-menu-button";
    document.getElementById("content-r-2").className =
        "content-detail-r-active";
    document.getElementById("content-r-1").className = "content-detail-r";
    document.getElementById("content-r-3").className = "content-detail-r";
    r_location = 2;
}
function r_location_change_to_3() {
    document.getElementById("content-r-button-3").className =
        "content-menu-button-active";
    document.getElementById("content-r-button-2").className =
        "content-menu-button";
    document.getElementById("content-r-button-1").className =
        "content-menu-button";
    document.getElementById("content-r-3").className =
        "content-detail-r-active";
    document.getElementById("content-r-2").className = "content-detail-r";
    document.getElementById("content-r-1").className = "content-detail-r";
    r_location = 3;
}
document
    .getElementById("content-r-button-1")
    .addEventListener("mouseover", function () {
        r_location_change_to_1();
    });
document
    .getElementById("content-r-button-2")
    .addEventListener("mouseover", function () {
        r_location_change_to_2();
    });
document
    .getElementById("content-r-button-3")
    .addEventListener("mouseover", function () {
        r_location_change_to_3();
    });
