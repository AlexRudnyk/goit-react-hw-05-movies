import { fetchMoviesById } from '../../components/Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup';
import AddInformation from 'components/AddInformation/AddInformation';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await fetchMoviesById(movieId);
        setMovie(item);
      } catch (error) {
        setError(error);
      }
    }
    fetchItem();
  }, [movieId]);

  return (
    <div>
      <MovieMarkup movie={movie} error={error} />
      <AddInformation />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
