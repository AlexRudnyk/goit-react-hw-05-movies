import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../components/Api/Api';

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
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
