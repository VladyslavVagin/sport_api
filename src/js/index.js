import GetExerciseFromApi from "./api_sport";

const getExercisesApi = new GetExerciseFromApi();
const listExercises = document.querySelector('.list-exercise');

function addCardsToHtml() {
getExercisesApi.getExercise().then(resp => {
     resp.map(item => listExercises.insertAdjacentHTML('beforeend', markupCard(item)));
    console.log(resp);
}
    
).catch(() => {});
}

addCardsToHtml();


function markupCard(item) {
   return mark = `<li class="exercise-item">
    <h3>${item.name}</h3>
    <p>${item.equipment}</p>
    <img src="${item.gifUrl}" alt="${item.name}">
    <p>${item.instructions}</p>
</li>`
};