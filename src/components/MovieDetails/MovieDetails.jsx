import { fetchMoviesById } from '../../components/Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieMarkup from 'components/MovieMarkup';
import Spinner from '../../components/Spinner';
import { Box } from 'components/Box';
import { ItemLink, Item, BackLink } from './MovieDetails.styled';
import { Error } from 'components/Error/Error';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    async function fetchItem() {
      setStatus('pending');
      try {
        const item = await fetchMoviesById(movieId);
        setMovie(item);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchItem();
  }, [movieId]);

  const backLinkHref = location?.state?.from ?? 'movies';

  return (
    <div>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <>
          <BackLink to={backLinkHref}>Go Back</BackLink>
          <MovieMarkup movie={movie} />
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
        </>
      )}
      {status === 'rejected' && <Error />}
    </div>
  );
};

export default MovieDetails;
