import getRefs from './refs ';

const { overlay, modal, modal__info, modalCloseBtn } = getRefs();
const watchedArray = [];
const queueArray = [];
let data = '';
export let movieId = '';

modal.addEventListener('click', addMovie);

function addMovie(evt) {
  const { title, genres, poster, year, vote, id } = data.dataset;

  movieId = id;

  if (evt.target.classList.contains('add-watched')) {
    const newObject = {
      title,
      genres,
      poster,
      year,
      vote,
    };
    
    if (evt.target.textContent === 'add to Watched') {
      watchedArray.push(newObject);
    evt.target.textContent = 'remove from Watched';
    } else {
    watchedArray.splice(watchedArray.indexOf(newObject), 1)
    evt.target.textContent = 'add to Watched';
  }
   
  }
  if (evt.target.classList.contains('add-queue')) {
    const newObject = {
      title,
      genres,
      poster,
      year,
      vote,
    };
    
    if (evt.target.textContent === 'add to queue') {
        queueArray.push(newObject);
    evt.target.textContent = 'remove from queue';
    } else {
    queueArray.splice(queueArray.indexOf(newObject), 1);
    evt.target.textContent = 'add to queue';
  }
  }
}

export function renderModal(evt) {
  data = evt.target.closest('.movie-list__item');
  const { title, genres, poster, popularity, about, votes, vote } =
    data.dataset;

  const markup = `
      <img
        class="modal__img"
        src="${poster}"
        alt=""
      />
      <div class="movie-description">
        <h2 class="movie-title">${title}</h2>
        <ul class="movie-info__list">
          <li class="movie-info__item">
            <p class="info-name">Vote / Votes</p>
            <p class="info-value votes-wrapper"><span class="vote-average">${vote}</span> / ${votes}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Popularity</p>
            <p class="info-value">${popularity}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Original Title</p>
            <p class="info-value">${title}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Genre</p>
            <p class="info-value">${genres}</p>
          </li>
        </ul>
        <div class="movie-about">
          <p class="about__title">About</p>
          <p class="about__text">${about}</p>
        </div>
        <div class="btn-wrapper">
          <button class="modal__btn add-watched btn-accent">add to Watched</button>
          <button class="modal__btn add-queue">add to queue</button>
        </div>
      </div>`;

  modal__info.innerHTML = markup;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // ховаємо модалку фільму по Escape

  document.addEventListener('keydown', escapePressed);

  removeModal();
}

function removeModal() {
  modalCloseBtn.addEventListener('click', addHidden);
  overlay.addEventListener('click', addHidden);
}

function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  document.removeEventListener('keydown', escapePressed);
}

function escapePressed(event) {
  event.preventDefault();

  if (event.code === 'Escape') {
    console.log('Ecsape was pressed');
    addHidden();
  }
}
