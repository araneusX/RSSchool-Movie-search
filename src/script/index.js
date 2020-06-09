import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';
import swiperConfig from './swiperConfig';
import Keyboard from '../keyboard/keyboard';
import '../css/style.scss';

import Element from './element';
import preloader from './preloader';
import saveList from './saveList';
import showInfo from './info';

import {
  getMoviesList, getRandomWord, getShowSlidersCount, getMoreInfo,
} from './utils';
import { getSlides } from './createSlide';

const runApp = async () => {
  const form = new Element(document.getElementById('js-form'));
  const input = new Element(document.getElementById('js-input'));
  const slidesWrapper = new Element(document.getElementById('js-slides'));
  const message = new Element(document.getElementById('js-message'));
  const clearBtn = new Element(document.getElementById('js-clear'));
  const featuredBtn = new Element(document.getElementById('js-featuredbtn'));
  const featured = new Element(document.getElementById('js-featured'));

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
            && allShowResults < totalResults)
    ) {
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
            slidesWrapper.addClass('disappearing');
            setTimeout(() => {
              swiper.removeAllSlides();
              swiper.appendSlide(slides);
              slidesWrapper.removeClass('disappearing');
              preloader.hide();
            }, 300);
          } else {
            swiper.appendSlide(slides);
            slidesWrapper.removeClass('disappearing');
            preloader.hide();
          }

          if (mode === 'add') {
            allShowResults += movies.length;
            totalResults -= list.duplicates;
          } else {
            totalResults = list.totalResults - list.duplicates;
            allShowResults = movies.length;
            if (!additional.ok) {
              message.content = `Showing results for "${list.request}", but some movie data is not available now. Try again later.`;
              message.addClass('error');
            } else {
              message.content = `Showing results for "${list.request}":`;
              message.removeClass('error');
            }
          }

          isLoading = false;
          return list.request;
        }
        if (list.Error === 'Movie not found!') {
          message.content = `No results for "${list.request}"...`;
        } else {
          message.content = `Unable to process request. ${list.Error}`;
        }
      } catch (err) {
        message.content = `${err}`.slice(7);
      }
      message.addClass('error');
      preloader.hide();
      isLoading = false;
    }
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
      const result = await fillSlider(input.value, 'user');
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

  clearBtn.addListener('click', () => {
    input.value = ''; input.focus();
  });


  featuredBtn.addListener('click', (event) => {
    event.stopPropagation();
    featured.toggleClass('open');
    isMenu = !isMenu;

    const closeMenu = (e) => {
      if (!(e.target.closest('#js-featured') || e.target.closest('#js-featuredbtn'))) {
        featured.removeClass('open');
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

  slidesWrapper.addListener('click', (event) => {
    if (event.target.dataset.later) {
      saveList.addItem(event.target.dataset.later, event.target.dataset.title);
    } else if (event.target.dataset.more) {
      showInfo(event.target.dataset.more);
    }
  });

  form.addListener('submit', async (e) => {
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
