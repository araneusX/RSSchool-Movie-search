import Swiper from 'swiper';
import swiperConfig from './swiperConfig';
import Keyboard from '../keyboard/keyboard';
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

  const swiper = new Swiper('.swiper-container', swiperConfig);

  const searchMoves = async (userResponse) => {
    preloader.show();
    try {
      const list = await getMoviesList(userResponse, 1);
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
        return true;
      }
      if (list.Error === 'Movie not found!') {
        message.content = `No results for "${list.request}"...`;
      } else {
        message.content = `Unable to process request. ${list.Error}`;
      }
    } catch (err) {
      message.content = `${err}`.slice(7);
    }
    message.removeClass('success');
    message.addClass('error');
    preloader.hide();
    return false;
  };

  let keyboard;
  let isKeyboard = false;
  let onDocumentClick;
  const hideKeyboard = () => {
    keyboard.hide();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', hideKeyboard);
    isKeyboard = false;
  };

  const showKeyboard = () => {
    keyboard.show();
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', hideKeyboard);
    isKeyboard = true;
  };

  onDocumentClick = (event) => {
    if (!(event.target.closest('#js-input')
        || event.target.closest('#js-keyboard')
        || event.target.closest('#js-clear'))) {
      hideKeyboard();
    }
  };
  const onEnterCallback = async () => {
    if (input.value !== '') {
      const result = await searchMoves(input.value);
      if (result) {
        hideKeyboard();
      }
    }
  };
  const keyboardBtn = new Element(document.getElementById('js-keyboardbtn'));
  keyboard = new Keyboard(document.getElementById('js-keyboard'), input.element, onEnterCallback);
  keyboardBtn.addListener('click', (event) => {
    event.stopPropagation();
    if (!isKeyboard) {
      showKeyboard();
    } else {
      hideKeyboard();
    }
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
      await searchMoves(input.value);
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
