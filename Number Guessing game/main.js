const input = document.getElementById("inputBox");
const result = document.getElementById("result");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const guess = Number(input.value);
    
    if (Number.isNaN(guess)) {
        result.textContent = "Enter a number";
        return;
    }

    const randomNumber = Math.floor(Math.random() * 100);

    if (guess > randomNumber) {
        result.textContent = "Too high!";
    } else if (guess < randomNumber) {
        result.textContent = "Too low!";
    } else {
        result.textContent = "Correct!";
    }
});