import { getCardData } from './fetchDataForMain';

export function renderMovieCard(gallery, somePromis) {
  somePromis
    .then(({ card_data }) => {
      const markup = card_data
        .map(({ fullposter_path, title, genres, release_year }) => {
          return `
      <li class="movie-list__item" data-title=${title}>
        <img class="movie-list__img" src=${fullposter_path} alt=${title}>
        <div class="movie-list__info">
          <h2 class="movie-list__title">${title}</h2>
          <p class="movie-list__text">${genres} | ${release_year}</p>
        </div>
      </li>
    `;
        })
        .join('');

      gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
