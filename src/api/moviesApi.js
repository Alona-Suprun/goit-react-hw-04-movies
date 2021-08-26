const URL = "https://api.themoviedb.org/3";
const API_KEY = "a5c011004da0764d53894c4d728d240c";

async function fetchMovies(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchMovies(`${URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMoviesByName(searchValue) {
  return fetchMovies(
    `${URL}/search/movie?api_key=${API_KEY}&query=${searchValue}&page=1`
  );
}

export function fetchMoviesDetails(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCast(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchMovieReviews(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
