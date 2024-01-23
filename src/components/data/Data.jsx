/* eslint-disable no-useless-catch */
async function fetchMovies({ inputValue, page }) {
  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTZiZDc5YmIwZThiODhkOWI1NzYzNzUwZDljN2U1MiIsInN1YiI6IjY1YTNmM2M1MjY2Nzc4MDEyZTY0NmY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeZ79D086cj3s_oe2yJnnHDHYI96_pjYFdvOC7IHGKY';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY} `,
    },
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=${page}&include_adult=true`, options);
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw console.error(error);
  }
}

export default fetchMovies;
