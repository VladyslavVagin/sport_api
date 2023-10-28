import axios, { Axios } from "axios";
import { Notify } from "notiflix";
// MALE ALL CONSTANT 
const allCards = document.querySelector('.list-all-cards');
const chooseBtns = document.querySelectorAll('.nav-exercise-btn');
const inputData = document.querySelector('.form-search-input');
const titleExercise = document.querySelector('.exercises-title');
const paginations = document.querySelector('.tui-pagination');

// let defaults values
let cardsMarkup = '';
let filterText = 'Body parts';
let limit = 12;

if(window.innerWidth < 768) {
    limit = 9;
}
// add event listeners for buttons for choosing type of exercise
chooseBtns.forEach(btn => btn.addEventListener('click', onClickChoose));

function onClickChoose(e) {
    titleExercise.innerHTML = `Exercises<span class="exercise-title-span"></span>`;
    allCards.innerHTML = ``;
    inputData.style.display = 'none';

    const activeBtn = document.querySelector('.current');
    const currBtn = e.currentTarget;

    activeBtn.classList.remove('current');
    currBtn.classList.add('current');

    const query = currBtn.dataset.filter;
    markupCards(query);
};

async function getCardsFromApi(query, limit, page = 1) {
    try{
        const request = `https://your-energy.b.goit.study/api/filters?filter=${query}&page=${page}&limit=${limit}`;
        const response = await axios.get(request);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        Notify.failure('ERROR !!!')
    }
};

async function markupCards(query, page = 1) {
    allCards.dataset.page = 'cards';
    paginations.style.display = 'none';

    filterText = query.split('_').join(' ');
    cardsMarkup = '';

    const {results: cards, totalPages} = await getCardsFromApi(query, limit, page);

    if (!(totalPages === 1)) {
        paginations.style.display = 'flex';
      }

      cards.forEach(card => cardsMarkup += `<li class="ex-card-item" data-query="${card.name}" data-filter="${filterText}">
                <img class="ex-card-img" src="${card.imgURL}" alt="${card.name} card exercises" loading="lazy">
                <div class="ex-card-text-container">
                    <h2 class="ex-card-title">${card.name}</h2>
                    <p class="ex-card-filter">${filterText}</p>
                </div>
            </li>`)

     allCards.innerHTML = cardsMarkup;
};
markupCards('Body parts');