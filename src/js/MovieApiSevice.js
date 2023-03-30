import axios from 'axios';
const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
const BASE_URL = 'https://api.themoviedb.org/3/';

// export default class MovieApiSevice {
//   async fetchMovie() {
//     const response = await axios({
//       url: BASE_URL,
//       params: {
//         key: API_KEY,
//         media_type: 'movie',
//         time_window: 'day',
//       },
//     });
//   }
// }
export async function downloadGenresIdList() {
  return await axios(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(
    ({ data }) => {
      return data.genres;
    }
  );
}

export async function fetchSearch(additionalUrl, page) {
  return await axios(
    `${BASE_URL}${additionalUrl}?api_key=${API_KEY}&page=${page}`
  );
}
