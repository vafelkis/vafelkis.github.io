var isplaying = false;
//alert('YOU ARE A JACKASS!!!!!!')
//confirm("GO!!!!!")
//prompt("if u won't type 'pneumonoultramicroscopicsilicovolcanoconiosis' here in one minute u love fortnite (pasting doesn't count)");

var fuck = 0;
let oldScroll = 0;
var it = 0;

var audio = new Audio('ketchup.mp3');

var newimg = document.createElement("img");
newimg.setAttribute("src", "img/4kishere.jpeg");

var wow = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=otCpCn0l4Wo",
    "https://www.youtube.com/watch?v=gG_dA32oH44"
];

var names = [
    "idfk remembr cant touch this?",
    "HHOHOHIHOHO NINJAS IN PARIS!!!!",
    "NO MORE LEFT x!!!!!!!!!!"
];

// Link changer
function balls() {
    var some = document.getElementById("nibba");

    if (fuck == 2) {
        some.removeAttribute('href');
        some.innerText = names[fuck];
        return;
    }

    some.innerText = names[fuck];
    some.href = wow[fuck];

    fuck++;
}

// Audio toggle
function idk() {
    var some = document.getElementById("idx");
    some.innerText = 'The Ketchup Song, press again to pause.';

    if (isplaying) {
        audio.pause();
        some.innerText = 'The Ketchup Song, press again to continue.';
        isplaying = false;
        return;
    }

    audio.loop = true;
    audio.play();
    isplaying = true;
}

// Delay wrapper
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Reveal a spoiler element
function unspoiler(e) {
    console.log(e.target.id);
    e.target.style.backgroundColor = "lightgray";
    e.target.style.color = "black";
    e.target.style.cursor = "auto";
}

// Increase size
function changeSizeOrSmth() {
    var some = document.getElementById("comicon");
    some.width += 3;
    some.height += 3;
}

// Decrease size
function decreaseSizeOrSmth() {
    var some = document.getElementById("nigeria");
    some.width -= 3;
    some.height -= 3;
}

// Scroll direction logger
window.onscroll = function () {
    console.log(oldScroll > this.scrollY);
    oldScroll = this.scrollY;
}

// Add random balance
function s() {
    var some = document.getElementById("mybuton");
    it += Math.floor(Math.random() * 11);
    some.innerHTML = `Balance: ${it}`;
}

// Auto increment every second
function black() {
    var some = document.getElementById("mybuton");
    it++;
    some.innerHTML = `Balance: ${it}`;
}

window.setInterval(black, 1000); // 1000 ms
