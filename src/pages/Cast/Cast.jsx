import { fetchMovieCast } from 'components/Api/Api';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastImg, Item } from './Cast.styled';
import Spinner from '../../components/Spinner';
import { CastError } from 'components/MovieDetailsError/CastError/CastError';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    async function fetchCastInfo() {
      setStatus('pending');
      try {
        const info = await fetchMovieCast(movieId);
        setCastInfo(info);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchCastInfo();
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <ul>
          {castInfo.cast.map(({ id, profile_path, name, character }) => (
            <Item key={id}>
              <CastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : 'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png'
                }
                alt={name}
              />
              <Box>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </Box>
            </Item>
          ))}
        </ul>
      )}
      {status === 'rejected' && <CastError />}
    </div>
  );
};

export default Cast;
