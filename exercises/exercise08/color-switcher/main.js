// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");
// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "grey";
    body.style.color = "white";
}

function switchToBlue() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
    body.style.color = "white";
}

function switchToYellow() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    body.style.color = "grey";
}

// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToGray);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchToYellow);
