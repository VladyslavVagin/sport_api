export function createCards(arr) {
    return arr
      .map(
        ({ burnedCalories, name, target, rating, bodyPart, time, _id }) => `
        <li class="exercise-card" >
          <div class="first-part">
            <div class="badge">
              <div class="badge-text">WORKOUT</div>
            </div>
            <div class="exercise-card-rating">
              <p class="rating-text">${rating.toFixed(1)}</p>
              <svg class="icon-star" width="18" height="18">
                <use href="./images/icons.svg#icon-yellow_star"></use>
              </svg>
            </div>
            <button class="start-btn" data-id="${_id}" type="submit">
              Start
              <svg class="start-btn-icon" width="16" height="16">
                <use href="./images/icons#icon-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="second-part">
            <svg class="run-man-icon" width="24" height="24">
              <use href="./images/icons#icon-run"></use>
            </svg>
            <p class="exercise-name">${name}</p>
          </div>
          <div class="third-part">
            <p class="text-card">Burned calories: <span class="value-card">${burnedCalories} / ${time}</span></p>
            <p class="text-card">Body part: <span class="value-card">${bodyPart}</span></p>
            <p class="text-card">Target: <span class="value-card">${target}</span></p>
          </div>
        </li>
      `
      )
      .join('');
  }