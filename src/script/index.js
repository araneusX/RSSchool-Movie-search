import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';
import swiperConfig from './swiperConfig';
import Keyboard from '../keyboard/keyboard';
import '../css/style.scss';

import preloader from './preloader';
import saveList from './saveList';
import showInfo from './info';

import {
  getMoviesList, getRandomWord, getShowSlidersCount, getMoreInfo,
} from './utils';
import { getSlides } from './createSlide';

const runApp = async () => {
  const form = document.getElementById('js-form');
  const input = document.getElementById('js-input');
  const slidesWrapper = document.getElementById('js-slides');
  const message = document.getElementById('js-message');
  const clearBtn = document.getElementById('js-clear');
  const featuredBtn = document.getElementById('js-featuredbtn');
  const featured = document.getElementById('js-featured');

  let allShowResults;
  let totalResults;
  let request = getRandomWord();
  let nextPage = 1;
  let isLoading = false;
  let isMenu = false;

  const swiper = new Swiper('.swiper-container', swiperConfig);

  const fillSlider = async (userRequest, mode = 'start') => {
    if (mode !== 'add'
        || (!isLoading
            && allShowResults - (getShowSlidersCount(swiper) + swiper.activeIndex) < 7
            && allShowResults < totalResults)) {
      isLoading = true;

      if (mode !== 'add') {
        preloader.show();
        nextPage = 1;
      }

      try {
        const list = await getMoviesList(userRequest, nextPage);
        if (list.Response === 'True') {
          const movies = list.Search;

          const additional = await getMoreInfo(movies);
          const slidesData = { movies, additional: additional.value };
          const slides = await getSlides(slidesData);

          nextPage += 1;

          if (mode === 'user') {
            slidesWrapper.classList.add('disappearing');
            setTimeout(() => {
              swiper.removeAllSlides();
              swiper.appendSlide(slides);
              slidesWrapper.classList.remove('disappearing');
              preloader.hide();
            }, 300);
          } else {
            swiper.appendSlide(slides);
            slidesWrapper.classList.remove('disappearing');
            preloader.hide();
          }

          if (mode === 'add') {
            allShowResults += movies.length;
            totalResults -= list.duplicates;
          } else {
            totalResults = list.totalResults - list.duplicates;
            allShowResults = movies.length;
            if (!additional.ok) {
              message.innerText = `Showing results for "${list.request}", but some movie data is not available now. Try again later.`;
              message.classList.add('error');
            } else {
              message.innerText = `Showing results for "${list.request}":`;
              message.classList.remove('error');
            }
          }

          isLoading = false;
          return list.request;
        }
        if (list.Error === 'Movie not found!') {
          message.innerText = `No results for "${list.request}"...`;
        } else {
          message.innerText = `Unable to process request. ${list.Error}`;
        }
      } catch (err) {
        message.innerText = `${err}`;
      }
      message.classList.add('error');
      preloader.hide();
      isLoading = false;
    }
    return false;
  };

  let keyboard;
  let hasKeyboard = false;
  let onDocumentClick;
  const hideKeyboard = () => {
    keyboard.hide();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', hideKeyboard);
    hasKeyboard = false;
  };

  const showKeyboard = () => {
    keyboard.show();
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', hideKeyboard);
    hasKeyboard = true;
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
      const result = await fillSlider(input.value, 'user');
      if (result) {
        hideKeyboard();
      }
    }
  };

  const keyboardBtn = document.getElementById('js-keyboardbtn');
  keyboard = new Keyboard(document.getElementById('js-keyboard'), input, onEnterCallback);
  keyboardBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!hasKeyboard) {
      showKeyboard();
    } else {
      hideKeyboard();
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    input.focus();
  });


  featuredBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    featured.classList.toggle('open');
    isMenu = !isMenu;

    const closeMenu = (e) => {
      if (!(e.target.closest('#js-featured') || e.target.closest('#js-featuredbtn'))) {
        featured.classList.remove('open');
        document.removeEventListener('click', closeMenu);
        isMenu = false;
      }
    };

    if (isMenu) {
      document.addEventListener('mousedown', closeMenu);
    } else {
      document.removeEventListener('mousedown', closeMenu);
    }
  });

  slidesWrapper.addEventListener('click', (event) => {
    if (event.target.dataset.later) {
      saveList.addItem(event.target.dataset.later, event.target.dataset.title);
      event.target.classList.toggle('added');
    } else if (event.target.dataset.more) {
      showInfo(event.target.dataset.more);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (input.value !== '') {
      request = await fillSlider(input.value, 'user');
    } else {
      input.focus();
    }
  });

  swiper.on('slideChange', () => { fillSlider(request, 'add'); });

  swiper.on('reachEnd', () => {
    if (isLoading) {
      preloader.show();
    }
  });

  fillSlider(request);
};

document.addEventListener('DOMContentLoaded', runApp);
