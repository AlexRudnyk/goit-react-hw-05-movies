import { fetchMovieCast } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInfo() {
      try {
        const info = await fetchMovieCast(movieId);
        setCastInfo(info);
      } catch (error) {
        setError(error);
      }
    }
    fetchCastInfo();
  }, [movieId]);

  return (
    <div>
      {castInfo.length !== 0 && !error && (
        <ul>
          {castInfo.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : 'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png'
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
