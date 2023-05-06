console.log("This code is loading the JavaScript file");

let nouns = ["heart", "thought", "ocean", "brain", "world"];
let verbs = ["look", "make", "continue", "draw", "see"];
let adjectives = ["good", "different", "possible", "emotional", "thrilled"];

// select a random element from each array
// write a function generatePoem() render this randomised text to the page
// have this function run on window load

function selectRandomElement(array) {
    let randomizer = array[Math.floor(Math.random() * array.length)];
    return randomizer;
}

function generatePoem(n) {
    // select a random element from each array
    let randomNoun = selectRandomElement(nouns);
    let randomVerb = selectRandomElement(verbs);
    let randomAdjectives = selectRandomElement(adjectives);

    for (let i = 1; i < n; i++) {
        console.log(i * 1000)
        setTimeout(generatePoem, i * 1000)
    }

    //grab the container element on the web page
    const container = document.querySelector('.container')

    //create a new paragraph element
    const paragraph = document.createElement('p');

    //construct out sentence
    paragraph.textContent = `My ${randomNoun} leaps ${randomAdjectives} when I ${randomVerb} a rainbow in the sky`

    //append the paragraph to the page
    container.appendChild(paragraph);
}

//clear previous poem when click botton agian
function clearPoem() {
    document.querySelector('p').innerHTML = "";
    // const container = document.querySelector('.container')
    // const paragraph = document.querySelector('p');
    // container.removeChild(paragraph);
}

function generateAndClearPoem() {
    clearPoem(); // clear the previously generated poem
    generatePoem(5); // generate a new poem
}

let btn = document.querySelector("button");

let clickCount = 0;

btn.addEventListener("click", function () {
    clickCount++;
    if (clickCount == 1) {
        generatePoem(5);
    }
    if (clickCount > 1) {
        generateAndClearPoem(); // call the function on the second click
    }
    else { };
});

// btn.addEventListener("click", function () {
//     clearPoem(); // clear the previously generated poem
//     generatePoem(5); // generate a new poem
// });

// function generateAndClearPoem() {
//     clearPoem(); // clear the previously generated poem
//     generatePoem(5); // generate a new poem
// }

// //call or evoke the function
// let btn = document.querySelector("button");

// let poemGenerated = false;

// btn.addEventListener("click", function () {
//     if (poemGenerated) {
//         clearPoem();
//     } else {
//         poemGenerated = true;
//     }
//     generatePoem(5);
// });

// let clickCount = 0;

// btn.addEventListener("click", function () {
//     clickCount++;
//     if (clickCount > 1) {
//         generateAndClearPoem(); // call the function on the second click

//     }
//     else { generatePoem(5) };
// });

// // add event listener to the button
// btn.addEventListener("click", generatePoem(5));

// function generateAndClearPoem() {
//     clearPoem(); // clear the previously generated poem
//     generatePoem(5); // generate a new poem
// }
