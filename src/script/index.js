import Swiper from 'swiper';
import '../css/style.scss';

import Element from './element';
import Preloader from './preloader';

import {
  getMoviesList, getMoreInfo, getPosters, getRandomWord,
} from './utils';
import { getSlides } from './createSlide';

const runApp = async () => {
  const form = new Element(document.getElementById('js-form'));
  const input = new Element(document.getElementById('js-input'));
  const slidesWrapper = new Element(document.getElementById('js-slides'));
  const preloader = new Preloader();
  
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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      '@1': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.5': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      '@2': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  preloader.show();
  let allShowResults;
  const randomWord = getRandomWord();
  const startRequest = await getMoviesList(randomWord, Math.floor(Math.random() * 4) + 1);
  if (startRequest.Response === 'True') {
    allShowResults = startRequest.Search;
    const startSlides = await getSlides(allShowResults);
    swiper.appendSlide(startSlides);
  } else {
    console.log(startRequest.Error);
  }
  slidesWrapper.removeClass('disappearing');
  preloader.hide();

  window.addEventListener('resize', async () => { swiper.navigation.update(); });

  form.addListener('submit', async (e) => {
    e.preventDefault();
    preloader.show();
    const list = await getMoviesList(input.value, 1);
    if (list.Response === 'True') {
      const { totalResults } = list;
      const movies = list.Search;
      const slides = await getSlides(movies);
      slidesWrapper.addClass('disappearing');
      setTimeout(() => {
        swiper.removeAllSlides();
        swiper.appendSlide(slides);
        slidesWrapper.removeClass('disappearing');
        preloader.hide();
      }, 300);
    } else {
      console.log(list.Error);
      preloader.hide();
    }
  });
};

document.addEventListener('DOMContentLoaded', runApp);
