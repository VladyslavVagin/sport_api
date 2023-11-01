// @ts-nocheck
const openBurger = document.querySelector('[data-burger-open]');
const closeBurger = document.querySelector('[data-burger-close]');
const burgerMenu = document.querySelector('[data-burger]');
const buttonUp = document.querySelector('.up-btn-container');

buttonUp.classList.add('is-hidden');

openBurger.addEventListener('click', () => burgerMenu.classList.remove('is-hidden'));
closeBurger.addEventListener('click', () => burgerMenu.classList.add('is-hidden'));

window.addEventListener('scroll', onScroll);

function onScroll() {
    if(scrollY > 600) {
       buttonUp.classList.remove('is-hidden');
    } else {
        buttonUp.classList.add('is-hidden');
    }
}