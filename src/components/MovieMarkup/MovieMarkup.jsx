import { Box } from 'components/Box';
import { MovieImg } from './MovieMarkup.styled';
import PropTypes from 'prop-types';

const MovieMarkup = ({ movie }) => {
  const { poster_path, original_title, genres, overview, vote_average } = movie;

  return (
    <main>
      {movie.length !== 0 && (
        <>
          <Box display="flex" mb={5}>
            <MovieImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : 'https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png'
              }
              alt={original_title}
            />
            <Box ml={5}>
              <h1>{original_title}</h1>
              <div>
                <p>User Score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </Box>
          </Box>
        </>
      )}
    </main>
  );
};

MovieMarkup.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default MovieMarkup;
