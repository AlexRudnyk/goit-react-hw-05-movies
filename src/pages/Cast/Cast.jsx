import { fetchMovieCast } from 'components/Api/Api';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastImg, Item } from './Cast.styled';
import Spinner from '../../components/Spinner';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCastInfo() {
      setLoading(true);
      try {
        const info = await fetchMovieCast(movieId);
        setCastInfo(info);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCastInfo();
  }, [movieId]);

  return (
    <div>
      {loading && <Spinner />}
      {castInfo.length !== 0 && !error && (
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
    </div>
  );
};

export default Cast;
