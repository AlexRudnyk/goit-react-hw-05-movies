import { useState, useEffect } from 'react';
import fetchTrendingMovies from '../../components/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await fetchTrendingMovies();
        setMovies(items.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchItems();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title || movie.name}</li>
      ))}
    </ul>
  );
};

export default Home;
