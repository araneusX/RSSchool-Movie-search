import Swiper from 'swiper';
import '../css/style.scss';

import Element from './element';
import Preloader from './preloader';

import { getMoviesList, getRandomWord, getShowSlidersCount } from './utils';
import { getSlides } from './createSlide';

const runApp = async () => {
  const form = new Element(document.getElementById('js-form'));
  const input = new Element(document.getElementById('js-input'));
  const slidesWrapper = new Element(document.getElementById('js-slides'));
  const preloader = new Preloader();
  const message = new Element(document.getElementById('js-message'));
  const clearBtn = new Element(document.getElementById('js-clear'));

  let allShowResults;
  let totalResults;
  let request = getRandomWord();
  let nextPage = 1;
  let isLoading = false;

  const swiper = new Swiper('.swiper-container', {
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
  });

  preloader.show();
  try {
    const startSet = await getMoviesList(request, 1);
    if (startSet.Response === 'True') {
      const startSlides = await getSlides(startSet.Search);
      swiper.appendSlide(startSlides);
      allShowResults = startSet.Search.length;
      totalResults = startSet.totalResults;
      message.content = `Showing results for "${startSet.request}":`;
      message.addClass('success');
      nextPage = 2;
    } else {
      message.addClass('error');
      message.content = 'Service unavailable now. Try again later';
    }
    slidesWrapper.removeClass('disappearing');
  } catch (err) {
    message.addClass('error');
    message.content = 'Service unavailable now. Try again later';
  }
  preloader.hide();

  clearBtn.addListener('click', () => {
    input.value = ''; input.focus();
  });

  form.addListener('submit', async (e) => {
    e.preventDefault();
    if (input.value !== '') {
      preloader.show();
      try {
        const list = await getMoviesList(input.value, 1);
        if (list.Response === 'True') {
          const movies = list.Search;
          const slides = await getSlides(movies);

          totalResults = list.totalResults;
          allShowResults = movies.length;
          request = list.request;
          nextPage = 2;

          slidesWrapper.addClass('disappearing');
          setTimeout(() => {
            swiper.removeAllSlides();
            swiper.appendSlide(slides);
            slidesWrapper.removeClass('disappearing');
            preloader.hide();
          }, 300);
          message.content = `Showing results for "${list.request}":`;
          message.removeClass('error');
          message.addClass('success');
        } else {
          if (list.Error === 'Movie not found!') {
            message.content = `No results for "${list.request}"...`;
          } else {
            message.content = `Unable to process request. ${list.Error}`;
          }
          message.removeClass('success');
          message.addClass('error');
          preloader.hide();
        }
      } catch (err) {
        message.content = `${err}`.slice(7);
        message.removeClass('success');
        message.addClass('error');
        preloader.hide();
      }
    } else {
      input.focus();
    }
  });

  swiper.on('slideChange', async () => {
    if (!isLoading
      && allShowResults - (getShowSlidersCount(swiper) + swiper.activeIndex) < 6
      && allShowResults < totalResults) {
      isLoading = true;
      try {
        const list = await getMoviesList(request, nextPage);
        if (list.Response === 'True') {
          const movies = list.Search;
          const slides = await getSlides(movies);
          nextPage += 1;
          allShowResults += movies.length;
          swiper.appendSlide(slides);
        } else {
          console.log(`${request}: ${list.Error}`);
        }
      } catch (err) {
        console.log(`${request}: ${err}`);
      }
      isLoading = false;
    }
  });
};

document.addEventListener('DOMContentLoaded', runApp);
