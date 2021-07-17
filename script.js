var prev = document.getElementById("prev")
var next = document.getElementById("next")
var thumbnail = document.getElementsByClassName("thumbnail")
var hero = document.getElementById("hero")
var ProductImg = document.getElementById("ProductImg");

var backgroundImg = new Array(
    "IMG/Tbilisi.jpg",
    "IMG/gori (2).jpg",
    "IMG/kaxeti.jpg",
    "IMG/batumi.jpg",
    "IMG/martvili.jpg",

);
let i = 0;
next.onclick = function() {
    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")'
        thumbnail[i + 1].classList.add("active")
        thumbnail[i].classList.remove("active")

        i++;
    }
}