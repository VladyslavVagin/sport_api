// @ts-nocheck
import icons from '../images/icons.svg';
import { onClickStart } from './details-cards-favorites';

const qURL = 'https://your-energy.b.goit.study/api/quote';
const textDefault = document.querySelector('.text-no-favorites');

let favoriteCard;

createMarkupFav();
function createMarkupFav() {
    const cards = document.querySelector('.list-all-cards');
    const storedDatas = localStorage.getItem('exerciseCard');
    const saveData = JSON.parse(storedDatas);
    console.log(saveData);

    if(saveData.length === 0) {
        cards.innerHTML = '';
    textDefault.style.display = 'block';
    } else {
        textDefault.style.display = 'none';
         saveData.forEach(item => {
        const { id, name, target, bodyPart, burnedCalories } = item;
        favoriteCard = document.createElement('li');
        favoriteCard.className = 'exercise-item';
        favoriteCard.setAttribute('data-id', `${id}`);
        favoriteCard.innerHTML = `<div class="exercise-navigation">
        <div class="upper-part">
        <div class="badge">
        <p class="badge-text badge-text-fav">WORKOUT</p>
        </div>
        <button type="button" class="trash_btn"><svg width="16px" height="16px" class="trash-icon">
            <use href="${icons}#icon-trash"></use>
          </svg></button>
          </div>
        <button class="start-btn" type="submit">Start <svg width="16px" height="16px" class="start-btn-icon">
    <use href="${icons}#icon-arrow"></use>
  </svg></button>
      </div>
      <div class="name-exercise-container">
        <svg class="run-man-icon run-favo" width="24px" height="24px">
          <use href="${icons}#icon-run"></use>
        </svg>&nbsp;
        <h3 class="exercise-name">${name}</h3>
      </div>
      <ul class="discription">
        <li class="text-card text-card-favor">Burned calories: <p class="value-card">${burnedCalories} / 3 min</p>
        </li>
        <li class="text-card text-card-favor">Body part: <p class="value-card">${bodyPart}</p>
        </li>
        <li class="text-card text-card-favor">Target: <p class="value-card">${target}</p>
        </li>
      </ul>`;
      cards.appendChild(favoriteCard);
    })}
};