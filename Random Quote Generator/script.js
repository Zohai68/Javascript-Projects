const quotes = [
    "Success is built on small efforts repeated every day.",
    "Discipline will take you places motivation never could.",
    "The only limit is the one you refuse to challenge.",
    "Start where you are. Use what you have. Do what you can.",
    "Growth begins at the edge of your comfort zone.",
    "Dream big, but execute bigger.",
    "Consistency turns average into excellence.",
    "Your future is created by what you do today, not tomorrow.",
    "Focus on progress, not perfection.",
    "Hard work compounds just like interest."
];

const usedIndexes = new Set();    //creates a new set
const quoteElements = document.getElementById('quote');

function generateQuote() {
    if (usedIndexes.size == quotes.length) {
        usedIndexes.clear()  //clears the set of used indexes
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);  //picking a random index

        if(usedIndexes.has(randomIndex)) continue  //checking the picked index

        const quote = quotes[randomIndex];  //taking the quote from the picked index
        quoteElements.innerHTML = quote;
        usedIndexes.add(randomIndex);  //adding to the set of used indexes
    break
    }
}
