import '../components';
import './swiper-bundle.esm.browser';

const pagePagination = document.querySelector('.js-slider-pagination');

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    enabled: false,
  },
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: (swiper, current, total) => `${(current > 9) ? current : `0${current}`}`
  },
  watchOverfow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
const sliderNext = swiper.navigation.nextEl;
const sliderPrev = swiper.navigation.prevEl;
const sliderPagination = swiper.pagination.el;
pagePagination.appendChild(sliderPrev);
pagePagination.appendChild(sliderPagination);
pagePagination.appendChild(sliderNext);
