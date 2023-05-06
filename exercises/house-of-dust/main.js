console.log("This code is loading the JavaScript file");

let materials = ["wood", "brick", "broken dishes", "dust", "leaves", "grass"];

let places = [
    "cold, windy climate",
    "desert",
    "deserted airport",
    "deserted church",
    "deserted factory",
    "hot climate",
    "metropolis"
];

let peoples = [
    "collectors of all types",
    "fishermen and families",
    "french and german speaking people",
    "old friends",
    "horses and birds",
    "little boys",
    "lovers"
];

let things = [
    "natural light",
    "all available lighting",
    "candles",
    "electricity"
];

// select a random element from each array
// write a function generatePoem() render this randomised text to the page
// have this function run on window load

function selectRandomElement(array) {
    let randomizer = array[Math.floor(Math.random() * array.length)];
    return randomizer;
}

function generatePoem(n) {
    // select a random element from each array
    let randomMaterial = selectRandomElement(materials);
    let randomPlace = selectRandomElement(places);
    let randomPeople = selectRandomElement(peoples);
    let randomThing = selectRandomElement(things);

    for (let i = 0; i < n; i++) {
        console.log(i * 1000)
        setTimeout(generatePoem, i * 1000)
    }

    //grab the container element on the web page
    const container = document.querySelector('.container')

    //create a new paragraph element
    const paragraph = document.createElement('p');

    //construct out sentence
    paragraph.textContent = `A house of ${randomMaterial} \n in a ${randomPlace} \n using ${randomThing} \n inhabited by ${randomPeople}`

    //append the paragraph to the page
    container.appendChild(paragraph);
}


//call or evoke the function
window.addEventListener('load', function () {
    generatePoem(8)
})
