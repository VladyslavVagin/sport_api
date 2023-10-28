const openBurger = document.querySelector('[data-burger-open]');
const closeBurger = document.querySelector('[data-burger-close]');
const burgerMenu = document.querySelector('[data-burger]');

openBurger.addEventListener('click', () => burgerMenu.classList.remove('is-hidden'));
closeBurger.addEventListener('click', () => burgerMenu.classList.add('is-hidden'));