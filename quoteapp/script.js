const quotes = {
  all: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman"
  ],
  inspirational: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman"
  ],
  motivational: [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
  ],
  success: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair"
  ],
  life: [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is either a daring adventure or nothing at all. - Helen Keller"
  ],
  love: [
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "The greatest happiness of life is the conviction that we are loved. - Victor Hugo",
    "Love yourself first and everything else falls into line. - Lucille Ball"
  ],
  friendship: [
    "A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "True friendship comes when the silence between two people is comfortable. - David Tyson",
    "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.' - C.S. Lewis"
  ]
  // Add more categories and quotes as needed
};

const quoteElement = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');
const shareBtn = document.getElementById('share-btn');
const categorySelect = document.getElementById('category-select');

// Function to generate a random quote based on category
function generateQuote(category) {
  const categoryQuotes = quotes[category];
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  const quote = categoryQuotes[randomIndex];
  quoteElement.textContent = quote;
}

// Event listener for new quote button
newQuoteBtn.addEventListener('click', function() {
  const selectedCategory = categorySelect.value;
  generateQuote(selectedCategory);
});

// Event listener for share button
shareBtn.addEventListener('click', function() {
  const quoteText = quoteElement.textContent;
  const shareText = `Check out this inspiring quote: "${quoteText}"`;

  // Example: Open a new window to compose an email with the quote text
  window.open(`mailto:?body=${encodeURIComponent(shareText)}`);
});

// Initial quote generation
generateQuote('all');
