import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3aa95939248f9b0b0ef365fe990c778c';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  if (response.data.cast.length === 0) {
    return Promise.reject(new Error(`No cast was found.`));
  } else {
    return response.data.cast;
  }
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`No reviews was found.`));
  } else {
    return response.data.results;
  }
};
