
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        photo: "images/img1.jpg"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        photo: "images/img1.jpg"
    },

];

const quoteElement = document.getElementById('quote');
const authorNameElement = document.getElementById('authorName');
const authorPhotoElement = document.getElementById('authorPhoto');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote.quote;
    authorNameElement.textContent = `- ${randomQuote.author}`;
    authorPhotoElement.src = randomQuote.photo;
});