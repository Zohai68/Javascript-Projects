// Selecting first element with the tag name "body"
const body = document.getElementsByTagName("body") [0];

// Function to set the background color
function setColor(name) {
    body.style.backgroundColor = name;
}

// Function to generate a random RGB color
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    // Using Neat String Manipulation Trick
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}