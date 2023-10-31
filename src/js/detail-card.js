// @ts-nocheck
import { openRatingModal } from "./rating";

const closeCardBtn = document.querySelector('.ex-details-close');
const addToFavorites = document.querySelector('.add-favorites-btn');
const deleteBtn = document.querySelector('.remove-from-favorites-btn');
const ratingButton = document.querySelector('.give-rating-btn');
const cardDetailModal = document.querySelector('.card-details');
const cardDetailBackdrop = document.querySelector('.ex-details-backdrop');
const cardContainer = document.querySelector('.ex-details-modal');
// ==============================================================================================================
const LS_KEY = 'exerciseCard';
let parsedModal = [];
let cardLS = {};

export function makeDetailsCard(id) {
  cardDetailBackdrop.classList.remove('is-hidden');
  return fetch(`https://your-energy.b.goit.study/api/exercises/${id}`).then(
    response => response.json()
  );
}

// ================================================================================================================
// FUNCTION THAT CLOSE MODAL WINDOW WITH DETAILS OF EXERCISE ======================================================
function closeDetailWindow(e) {
  if (e.code === 'Escape' || e.target === cardDetailBackdrop) {
    onCloseCard();
  }
}

function onCloseCard() {
  cardDetailBackdrop.style.display = 'none';
  window.removeEventListener('keydown', closeDetailWindow);
  cardDetailBackdrop.removeEventListener('click', closeDetailWindow);
  closeCardBtn.removeEventListener('click', onCloseCard);
}
// ======================================================================================================================
// FUNCTION FOR CREATE OBJECT FOR LOCALSTORAGE
function createDataLocalStorage(data) {
  cardLS = {
    id: `${data._id}`,
    gifUrl: `${data.gifUrl}`,
    name: `${data.name}`,
    rating: `${data.rating}`,
    target: `${data.target}`,
    bodyPart: `${data.bodyPart}`,
    equipment: `${data.equipment}`,
    popularity: `${data.popularity}`,
    burnedCalories: `${data.burnedCalories}`,
    description: `${data.description}`,
  };
}
// =======================================================================================================
// FUNCTION FOR RENDERING CARD
export function renderCard(data) {
  cardDetailBackdrop.style.display = '';
  const cardDetailed = createDetailMarkup(data);
  cardDetailModal.innerHTML = cardDetailed;
  createRating();
  createDataLocalStorage(data);
}

function createDetailMarkup(data) {
  closeCardBtn.addEventListener('click', onCloseCard);
  window.addEventListener('keydown', closeDetailWindow);
  cardDetailBackdrop.addEventListener('click', closeDetailWindow);
  const dataFromLocalStorage =
    JSON.parse(localStorage.getItem('exerciseCard')) ?? [];

  let isCard = false;

  for (let card of dataFromLocalStorage) {
    if (card.id === data._id) {
      isCard = true;
      createDeleteButton();
      break;
    }
  }
  createAddButton();
   if(isCard) {
createDeleteButton();
   }

 
  cardContainer.setAttribute('data-id', `${data._id}`);
  let ratingStars = data.rating.toFixed(1);
  return `      
  <div class="info-card">
      <img src="${data.gifUrl}" alt="${data.name}" class="main-modal-img">
          <div>
              <h3 class="modal-header">${data.name}</h3>
              <form action="rating__form">
                  <div class="form-item-rating">
                      <div class="rating">
                              <div class="rating__value">${ratingStars}</div>
                          <div class="rating__body">
                              <div class="rating__active"></div>
                              <div class="rating__items">
                                  <input type="radio" class="rating__item" value="1" name="rating">
                                  <input type="radio" class="rating__item" value="2" name="rating">
                                  <input type="radio" class="rating__item" value="3" name="rating">
                                  <input type="radio" class="rating__item" value="4" name="rating">
                                  <input type="radio" class="rating__item" value="5" name="rating">
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
                  <div class="info">
                      <p class="info-item">
                          Target<span class="character">${data.target}</span>
                      </p>
                      <p class="info-item">
                          Body Part<span class="character">${data.bodyPart}</span>
                      </p>
                      <p class="info-item">
                          Equipment<span class="character">${data.equipment}</span>
                      </p>
                      <p class="info-item">
                          Popular<span class="character">${data.popularity}</span>
                      </p>
                      <p class="info-item">
                          Burned calories<span class="character">${data.burnedCalories}</span>
                      </p>
                  </div>
                  <p class="text-info">${data.description}</p>
          </div>
  </div>
`;
}
// FUNCTION FOR MAKE RATING ===================================================================================
function createRating() {
  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
    initRatings();
  }
  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }
    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidth();
    }
    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }
}

//   function that add datas to localstorage
function addCardToFavorites(e) {
  e.preventDefault();
  console.log(e);
  sendToLs();
  createDeleteButton();
}

function sendToLs() {
  parsedModal = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  parsedModal.push(cardLS);
  localStorage.setItem(LS_KEY, JSON.stringify(parsedModal));
}
// ============================================================================================================
// FUNCTION FOR DELETE CARD FROM LOCAL STORAGE
function deleteFromFavorites(e) {
  parsedModal = JSON.parse(localStorage.getItem('LS_KEY'));
  const idCardFav = e.target.closest('.ex-details-modal').dataset.id;

  const newParse = parsedModal.filter(item => item.id !== idCardFav);
  localStorage.setItem('exerciseCard', JSON.stringify(newParse));
  createAddButton();
}

function createAddButton() {
  addToFavorites.addEventListener('click', addCardToFavorites);
  addToFavorites.classList.remove('visually-hidden');
  deleteBtn.classList.add('visually-hidden');
  deleteBtn.removeEventListener('click', deleteFromFavorites);
}

function createDeleteButton() {
  addToFavorites.removeEventListener('click', addCardToFavorites);
  addToFavorites.classList.add('visually-hidden');
  deleteBtn.classList.remove('visually-hidden');
  deleteBtn.addEventListener('click', deleteFromFavorites);
}

ratingButton.addEventListener('click', onRatingClick);

function onRatingClick(e) {
  e.preventDefault();
  const dataRatingCard = e.target.closest('.ex-details-modal').dataset.id;
  openRatingModal(dataRatingCard);
  onCloseCard();
};