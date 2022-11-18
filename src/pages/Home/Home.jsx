import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../components/Api/Api';
import { Item, ItemLink } from './Home.styled';
import Spinner from '../../components/Spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const items = await fetchTrendingMovies();
        setMovies(items.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Spinner />}
      {!error && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <Item key={id}>
              <ItemLink to={`/movies/${id}`}>{title || name}</ItemLink>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
