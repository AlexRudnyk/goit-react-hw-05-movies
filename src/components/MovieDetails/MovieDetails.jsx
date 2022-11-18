import { fetchMoviesById } from '../../components/Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup';
import AddInformation from 'components/AddInformation/AddInformation';
import Spinner from '../../components/Spinner';
import BackLink from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await fetchMoviesById(movieId);
        setMovie(item);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [movieId]);

  return (
    <div>
      {loading && <Spinner />}
      <BackLink />
      <MovieMarkup movie={movie} error={error} />
      <AddInformation />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
