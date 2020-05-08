import { getMoreInfo, getPosters } from './utils';

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
  `;
  return slide;
};

export const getSlides = async (moviesList) => {
  const movies = moviesList;
  console.log(movies);
  
  // const additionalInfo = await getMoreInfo(movies);
  const posters = await getPosters(movies);
  const result = [];
  for (let i = 0; i < movies.length; i += 1) {
    result.push(createSlide(
      movies[i].imdbID,
      movies[i].Title,
      posters[i].value,
      movies[i].Year,
      '9.0/10', /* additionalInfo[i].value.Ratings[0].Value */
    ));
  }
  return result;
};
