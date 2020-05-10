import { getPosters } from './utils';

export const createSlide = (id, title, poster, year, rating) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.innerHTML = `
  <div class="swiper-slide_title"><a href="https://www.imdb.com/title/${id}/videogallery/" target="blank">${title}</a></div>
  <div class="swiper-slide_poster"><img src=${poster} alt="poster"></div>
  <div class="swiper-slide_year">${year}</div>
  <div class="swiper-slide_rating">
      <span>IMDb: ${rating}</span>
  </div>
  <div data-later="${id}" data-title="${title} (${year})" class="slider_later"></div>
  <div data-more="${id}" class="slider_more">Learn more...</div>
  `;
  return slide;
};

export const getSlides = async (slidesData) => {
  const result = [];
  const posters = await getPosters(slidesData.movies);

  for (let i = 0; i < slidesData.movies.length; i += 1) {
    const year = slidesData.movies[i].Year[slidesData.movies[i].Year.length - 1] === '–'
      ? slidesData.movies[i].Year.slice(0, slidesData.movies[i].Year.length - 1)
      : slidesData.movies[i].Year;
    result.push(createSlide(
      slidesData.movies[i].imdbID,
      slidesData.movies[i].Title,
      posters[i].value,
      year,
      /* '9.0/10', / */ slidesData.additional[i].value.Ratings[0].Value, /**/
    ));
  }
  return result;
};
