import { fetchMoviesById } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup';

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
    </div>
  );
};

export default MovieDetails;
