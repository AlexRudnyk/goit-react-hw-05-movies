import { fetchMoviesById } from '../../components/Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup';
import Spinner from '../../components/Spinner';
import { Box } from 'components/Box';
import { ItemLink, Item, BackLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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

  const backLinkHref = location?.state?.from ?? 'movies';

  return (
    <div>
      {loading && <Spinner />}
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <MovieMarkup movie={movie} error={error} />
      <Box
        borderTop="normal"
        borderBottom="normal"
        px={4}
        boxShadow="0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;"
      >
        <h4>Additional information</h4>
        <ul>
          <Item>
            <ItemLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </ItemLink>
          </Item>
          <Item>
            <ItemLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </ItemLink>
          </Item>
        </ul>
      </Box>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
