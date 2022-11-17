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
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};
