// @ts-nocheck
const quoteDesktop = document.querySelector('.quote-text-desk');
const authorDesktop = document.querySelector('.author-desk');

const qURL = 'https://your-energy.b.goit.study/api/quote';
dayQuoteDesktop();

async function dayQuoteDesktop() {
    try {
       const response = await fetch (qURL);
       if (response.ok) {
        const data = await response.json();
        const quote = data.quote;
        const author = data.author;
       quoteDesktop.innerHTML = quote;
       authorDesktop.innerHTML = author;
       } else {
        quoteDesktop.innerHTML = 'Sorry, no possible to receive Quote of the Day';
        authorDesktop.innerHTML = '';
       }

    } catch (error) {
        quoteDesktop.innerHTML = 'Error during server-request'
        authorDesktop.textContent = '';
    }
};