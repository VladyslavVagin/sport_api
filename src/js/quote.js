// @ts-nocheck
const qURL = 'https://your-energy.b.goit.study/api/quote';

const quoteDay = document.querySelector('.quote-text');
const authorQuote = document.querySelector('.author');

dayQuote();

async function dayQuote() {
    try {
       const response = await fetch (qURL);
       if (response.ok) {
        const data = await response.json();
        const quote = data.quote;
        const author = data.author;
       quoteDay.innerHTML = quote;
       authorQuote.innerHTML = author;
       } else {
        quoteDay.innerHTML = 'Sorry, no possible to receive Quote of the Day';
        authorQuote.innerHTML = '';
       }

    } catch (error) {
        quoteDay.innerHTML = 'Error during server-request'
        authorQuote.textContent = '';
    }
};