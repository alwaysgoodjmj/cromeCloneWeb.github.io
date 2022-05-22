const quotes = [
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    },
    {
        quote: "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
        author: "George Santayana",
    },
    {
        quote: "The wisest men follow their own direction.",
        author: "Euripides",
    },
    {
        quote: "Patience is the best remedy for every trouble.",
        author: "Titus Maccius Plautus",
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie",
    },
    {
        quote: "The secret of eternal youth is arrested development.",
        author: "Alice Roosevelt Longworth",
    },
    {
        quote: "Always laugh when you can. It is cheap medicine.",
        author: "Lord Byron",
    },
    {
        quote: "To win without risk is to triumph without glory.",
        author: "Pierre Corneille",
    },
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Blaze with the fire that is never extinguished.",
        author: "Luisa Sigea",
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
