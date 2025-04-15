import '../scss/style.scss'; // Путь к вашему SCSS-файлу

import initSliders from './slider.js';
import initModals from './modal.js';
import initBurger from './burger.js';
import initReadMoreBtn from './read-more.js';

// import Swiper and modules styles
window.addEventListener('DOMContentLoaded', function () {
  initBurger();
  initSliders();
  initModals();
  initReadMoreBtn();
});
