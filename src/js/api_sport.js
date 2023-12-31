// @ts-nocheck
import axios from 'axios';
import { Notify } from 'notiflix';
import { createCards } from './markup';
import { setPagination } from './pagination';
import { renderCard } from './detail-card';
import { makeDetailsCard } from './detail-card';


// MALE ALL CONSTANT
const allCards = document.querySelector('.list-all-cards');
const chooseBtns = document.querySelectorAll('.nav-exercise-btn');
const inputData = document.querySelector('.form-search-input');
const titleExercise = document.querySelector('.exercises-title');
const paginations = document.querySelector('.tui-pagination');
const input = document.querySelector('.search-input');

// let defaults values
let cardsMarkup = '';
let filterText = 'Body parts';
let limit = 12;

if (window.innerWidth < 768) {
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

  pushStartOnModal();
}

// FUNCTION THAT RETURN DATA CARDS 
export async function getCardsFromApi(query, limit, page = 1) {
  try {
    const request = `https://your-energy.b.goit.study/api/filters?filter=${query}&page=${page}&limit=${limit}`;
    const response = await axios.get(request);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
    Notify.failure('ERROR !!!');
  }
}

export async function markupCards(query, page = 1) {
  allCards.dataset.page = 'cards';
  paginations.style.display = 'none';

  filterText = query.split('%20').join(' ');
  cardsMarkup = '';

  const { results: cards, totalPages } = await getCardsFromApi(
    query,
    limit,
    page
  );
    setPagination(totalPages, page);

  if (!(totalPages === 1)) {
    paginations.style.display = 'flex';
  }

  cards.forEach(
    card =>
      (cardsMarkup += `<li class="ex-card-item" data-query="${card.name}" data-filter="${filterText}">
                <img class="ex-card-img" src="${card.imgURL}" alt="${card.name} card exercises" loading="lazy">
                <div class="ex-card-text-container">
                    <h2 class="ex-card-title">${card.name}</h2>
                    <p class="ex-card-filter">${filterText}</p>
                </div>
            </li>`)
  );

  allCards.innerHTML = cardsMarkup;
}
markupCards('Body%20parts');
// ====================================================================================
// ====================================================================================
let queryValue;
let filterValue;
let idValue;
let currentPage = 0;
let limitCards = 10;
if (window.innerWidth < 768) {
  limitCards = 8;
}

allCards.addEventListener('click', onClickCard);
inputData.addEventListener('submit', searchExercises);

async function onClickCard(event) {
  if (!event.target.parentNode.classList.contains('ex-card-item')) {
    return;
  }
  const currCard = event.target.closest('.ex-card-item');
  queryValue = currCard.dataset.query;
  filterValue = currCard.dataset.filter;

  allCards.dataset.query = queryValue;
  allCards.dataset.filter = filterValue;

  try {
    genereateCards(queryValue, filterValue);
  } catch (error) {
    console.log(error);
  }
}

export async function genereateCards(queryValue, filterValue, page = 1) {
  paginations.style.display = 'none';
  allCards.dataset.page = 'exercises';

  if (filterValue === 'Body parts') {
    filterValue = 'bodypart';
  }

  const data = await fetchCards(filterValue, queryValue, page);

  const { totalPages } = data;
  currentPage = page;

  setPagination(totalPages, page);

  if (!(totalPages === 1)) {
    paginations.style.display = 'flex';
  }
  inputData.style.display = 'block';

  titleExercise.innerHTML =  `Exercises /<span class="exercise-section-title-span">${queryValue}</span>`;

  allCards.innerHTML = createCards(data.results);
  pushStartOnModal();
}

async function fetchCards(part, category, page) {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/exercises?${part.toLowerCase()}=${category}&page=${page}&limit=${limitCards}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// =====================================================
// ====================================================

function showErrorNotification() {
     Notify.failure('Nothing was found for your request', {
      position: 'right-top',
      timeout: 3000,
      fontSize: '18px',
      borderRadius: '40px',
    });
  }
//======================================== SEARCH FUNCTIONS ================================
  async function fetchSearch(inputWord) {
    try {
      if (inputWord.trim() === '') {
        return;
      }
      const response = await axios.get(
        `https://your-energy.b.goit.study/api/exercises?${filterValue.toLowerCase()}=${queryValue}&keyword=${inputWord}&page=${currentPage}&limit=${limitCards}`
      );
      return response.data;
    } catch (error) {}
  }
  
  async function searchExercises(e) {
    e.preventDefault();
    try {
      const keyword = e.currentTarget.elements.filter.value;
      if (filterValue === 'Body parts') {
        filterValue = 'bodypart';
      }
      const data = await fetchSearch(keyword);
      paginations.style.display = 'none';
      input.value = '';
      
      if (data.results.length === 0) {
        throw new Error();
      }
      allCards.innerHTML = createCards(data.results);
      pushStartOnModal();
    } catch (error) {
      showErrorNotification();
    }
  }
  function pushStartOnModal () {
    const nextBtns = document.querySelectorAll('.start-btn');
    nextBtns.forEach(btn => {
     btn.addEventListener('click', (e) => {
       idValue = btn.dataset.id;
       makeDetailsCard(idValue).then(renderCard).catch(error => console.log(error));
     })
    })
 };

