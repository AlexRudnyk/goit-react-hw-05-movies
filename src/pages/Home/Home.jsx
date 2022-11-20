import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../components/Api/Api';
import { Item, ItemLink } from './Home.styled';
import Spinner from '../../components/Spinner';
import { Error } from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchItems() {
      setStatus('pending');
      try {
        const items = await fetchTrendingMovies();
        setMovies(items.results);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <Item key={id}>
              <ItemLink to={`/movies/${id}`}>{title || name}</ItemLink>
            </Item>
          ))}
        </ul>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};

export default Home;
