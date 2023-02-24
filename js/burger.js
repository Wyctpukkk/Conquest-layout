const listBurger = document.querySelector('.nav__list');
const buttonBurger = document.querySelector('.header__menu');
const bodyBlock = document.querySelector('body');

console.log(listBurger);
console.log(buttonBurger);

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  listBurger.classList.toggle('active');
  bodyBlock.classList.toggle('active');
});
