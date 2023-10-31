// @ts-nocheck
import Notify from 'notiflix';
import axios from 'axios';
import { makeDetailsCard } from './detail-card';
import { renderCard } from './detail-card';
// ===========================================================================================================

const btnCloseRating = document.querySelector('.button-close-f');
const btnSendRating = document.querySelector('.button-rating-form');
const ratingModalWindow = document.querySelector('.backdrop-rating');
const ratingForm = document.querySelector('.rating-form');
const ratingItem = document.querySelectorAll('.rating__item-f');
// ============================================================================================================

btnCloseRating.addEventListener('click', onCloseRating);

function onCloseRating(e) {
    e.preventDefault();
    ratingModalWindow.style.display = 'none';
};
 
export function openRatingModal (value) {
    ratingForm.setAttribute('data-id', value);
    ratingModalWindow.style.display = '';
};

const ratings = document.querySelectorAll('.rating-f');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }
};

function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active-f');
    ratingValue = rating.querySelector('.rating__value-f');
  }
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item-f');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
    //  refresh constants-values
        initRatingVars(rating);
    //   refresh active stars
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
        //}
      });
    }
  }
// ===========================================================================================
let rating;
let email;
let msg;
let id;

ratingForm.addEventListener('submit', addRating);
ratingForm.email.addEventListener('input', e => email = e.currentTarget.value);
ratingForm.message.addEventListener('input', e => msg = e.currentTarget.value);

async function addRating(e) {
    e.preventDefault();
    try {
      for (let rate of ratingItem) {
        if (rate.checked) {
          rating = rate.value;
        }
      }
      id = ratingForm.dataset.id;
      const data = await patchRating(id, rating, email, msg);
  
      console.log(data);
      onCloseRating(e);
      makeDetailsCard(id).then(renderCard).catch(error => console.log(error));
    } catch (error) {
        if (error.response && error.response.data) {
          showErrorNotification(error.response.data.message);
        } else {
          console.log(error);
        }
      }
    }
    
    function patchRating(id, rating, email, msg) {
        return axios.patch(
          `https://your-energy.b.goit.study/api/exercises/${id}/rating`,
          {
            rate: Number(rating),
            email: email,
            review: msg,
          }
        );
      }
      
      function showErrorNotification(text) {
        Notify.failure(text, {
          position: 'right-top',
          timeout: 3000,
          fontSize: '18px',
          borderRadius: '40px',
        });
      }
      