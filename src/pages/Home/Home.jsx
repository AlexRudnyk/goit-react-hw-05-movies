import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../components/Api/Api';
import { Item, ItemLink } from './Home.styled';

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
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title, name }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`}>{title || name}</ItemLink>
          </Item>
        ))}
      </ul>
    </>
  );
};

export default Home;
