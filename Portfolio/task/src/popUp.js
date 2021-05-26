let popup = document.querySelector(".window");
let card = document.querySelector(".open-window");
let close = document.querySelector(".close-window");

card.onclick = function(){
    popup.style.display = "block";
}
close.onclick = function (){
    popup.style.display = "none";
}
function myFunction(x) {
    x.classList.toggle("change");
}

function vanish() {
    let x = document.querySelectorAll(".hamburger");
    let i
    for (i=0;i<x.length; i++){

        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}
/*
let popout = document.querySelector(".hamburger");
let bar = document.querySelector(".change");
let closeBar = document.querySelector(".change");

bar.onclick = function(){
    popout.style.display = "block";
}
closeBar.onclick = function (){
    popout.style.display = "none";
}*/