const next = document.querySelector('.slider__btns_next');
const prev = document.querySelector('.slider__btns_prev');
const page = document.querySelector('.slider__btns_page');
const list = document.querySelector('.slider__list');

let margin = 0;
let currentSlide = 1;
function slider(action) {
  if (window.innerWidth > 560) {
    if (action === 'next' && margin > -2605) {
      margin += -521;
      currentSlide += 1;
    } else if (action === 'prev' && margin < 0) {
      margin += 521;
      currentSlide += -1;
    }
  } else {
    if (action === 'next' && margin > -1850) {
      margin += -370;
      currentSlide += 1;
    } else if (action === 'prev' && margin < 0) {
      margin += 370;
      currentSlide += -1;
    }
  }
  list.style.marginLeft = `${margin}px`;
  page.innerHTML = `0${currentSlide}/06`;
}

next.addEventListener('click', () => slider('next'));
prev.addEventListener('click', () => slider('prev'));
