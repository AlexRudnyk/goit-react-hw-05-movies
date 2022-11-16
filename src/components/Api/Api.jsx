import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3aa95939248f9b0b0ef365fe990c778c';

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchTrendingMovies;
