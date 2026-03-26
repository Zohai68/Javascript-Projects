document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Handle button click logic here
        try {
            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                display.value = eval(display.value);
            } else {
                display.value += value;
            }
        } catch (error) {
            display.value = "Error";
        }
    });
});