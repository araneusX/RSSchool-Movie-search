export default {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 7,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  watchOverflow: true,
  fadeEffect: {
    crossFade: true,
  },
  centerInsufficientSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    '@1': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.3': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    '@1.8': {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
