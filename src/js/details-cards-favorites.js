// @ts-nocheck
const closeButton = document.querySelector('.ex-details-close');
const removeFromFav = document.querySelector('.remove-from-favorites-btn');
const buttonRating = document.querySelector('.give-rating-btn');
const modalWindow = document.querySelector('.card-details-f');
const backdrop = document.querySelector('.backdrop');
const cardModal = document.querySelector('.modal');

let cardUn;
let cardToRemove = null;

const textDefault = document.querySelector('.text-no-favorites');

closeButton.addEventListener('click', onCloseModal);

function whenCloseModal(e) {
  if(e.code === 'Escape' || e.target === backdrop) {
    onCloseModal();
  }
};

function onCloseModal() {
    backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', whenCloseModal);
    backdrop.addEventListener('click', whenCloseModal);
};
// ====================================================================================================
export function onClickStart(cardDelete, dataIdent) {
    closeButton.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', whenCloseModal);
    backdrop.addEventListener('click', whenCloseModal);
    cardToRemove = cardDelete;
    backdrop.classList.remove('is-hidden');
    renderCardToFavorires(dataIdent);
    modalWindow.innerHTML = cardUn;
    createRating();
};

function renderCardToFavorires(dataIdent) {
    const savedUn = localStorage.getItem('exerciseCard');
    const parseUn = JSON.parse(savedUn);

    if(!parseUn.length) {
        return console.log(error);
    } else {
        return parseUn.forEach(itemModal => {
            const {
                id,
                gifUrl,
                name,
                rating,
                target,
                bodyPart,
                equipment,
                popularity,
                burnedCalories,
                description,
              } = itemModal;

              if(id !== dataIdent) {
                return;
              } else {
                cardModal.setAttribute('data-id', `${id}`);
                return cardUn = ` <div class="info-card">
                <img src="${gifUrl}" alt="${name}" class="main-modal-img">
                    <div>
                        <h3 class="modal-header">${name}</h3>
                        <form action="rating__form">
                            <div class="form-item-rating">
                                <div class="rating">
                                        <div class="rating__value">${rating}</div>
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
                                    Target<span class="character">${target}</span>
                                </p>
                                <p class="info-item">
                                    Body Part<span class="character">${bodyPart}</span>
                                </p>
                                <p class="info-item">
                                    Equipment<span class="character">${equipment}</span>
                                </p>
                                <p class="info-item">
                                    Popular<span class="character"> ${popularity}</span>
                                </p>
                                <p class="info-item">
                                    Burned calories<span class="character"> ${burnedCalories}</span>
                                </p>
                            </div>
                            <p class="text-info">${description}</p>
                    </div>
            </div>`
              }
        });
    }
};
// ======================================================================================================================
let ratingValue;
let ratingActive;

function createRating() {
    const ratings = document.querySelectorAll('.rating');
    if (ratings.length > 0) {
      initRatings();
    }
    function initRatings() {
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
//   =========================================================================================================
removeFromFav.addEventListener('click', onClickRemove);

function onClickRemove(e) {
    e.preventDefault();
    if(cardToRemove) {
        cardToRemove.remove();
    }
    const items = JSON.parse(localStorage.getItem('exerciseCard')) || [];
    // const indexToDelete = findIndexToDelete(items, cardToRemove);
    // if (indexToDelete !== -1) {
    //     items.splice(indexToDelete, 1);
    //   }
    //   localStorage.setItem('exerciseCard', JSON.stringify(items));
  
      if (document.querySelectorAll('.exercises-card').length === 0) {
        textDefault.style.display = 'block';
      }
    onCloseModal();
};