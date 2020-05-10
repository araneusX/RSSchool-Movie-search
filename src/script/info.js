import preloader from './preloader';
import { getMoreInfo, getPosters, yearNormalize } from './utils';
import Element from './element';

const container = new Element(document.getElementById('js-info'));

export default async (id) => {
  preloader.show();
  try {
    const infoData = await getMoreInfo([{ imdbID: id }]);
    const info = infoData.value[0].value;
    const infoPoster = await getPosters([{ Poster: info.Poster }]);
    const poster = infoPoster[0].value;
    const year = yearNormalize(info.Year);

    const modal = document.createElement('div');
    modal.classList.add('info_overlay');
    modal.innerHTML = `
      <div class="info_modal">
        <div class="info_container">
          <div class="info_wrapper">
            <img class="info_poster" src="${poster}" alt="${info.Title}">
            <div class="info_inner">
              <p class="info_title">${info.Title} (${year})</p>
              <p class="info_country">${info.Country}</p>
              <p class="info_director"><span>Director:</span> ${info.Director}</p>
              <p class="info_writers"><span>Writer:</span> ${info.Writer}</p>
              <p class="info_actor"><span>Actors:</span> ${info.Actors}</p>
              <p class="info_genre">${info.Genre}</p>
              <p class="info_released">Released ${info.Released}</p>
              <p class="info_runtime">${info.Runtime}</p>
              <p class="info_rating">IMDb rating: ${info.imdbRating}</p>
            </div>
          </div>
          <p class="info_description">${info.Plot}</p>
        </div>
        <div class="info_close" data-info="close"></div>
      </div>
    `;

    container.content = modal;
    const onDown = (event) => {
      event.stopPropagation();
    };
    const onClick = (event) => {
      event.stopPropagation();
      if (event.target.dataset.info === 'close' || event.target === modal) {
        modal.removeEventListener('click', onClick);
        modal.removeEventListener('mousedown', onDown);
        modal.remove();
      }
    };
    modal.addEventListener('mousedown', onClick);
    modal.addEventListener('click', onClick);
  } catch (err) {
    console.log(err);
  }
  preloader.hide();
};
