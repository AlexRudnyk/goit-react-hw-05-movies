import { Box } from 'components/Box';

const MovieMarkup = ({ movie, error }) => {
  const { poster_path, original_title, genres, overview, vote_average } = movie;

  return (
    <main>
      {movie.length !== 0 && !error && (
        <>
          <Box display="flex">
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={original_title}
            />
            <div>
              <h1>{original_title}</h1>
              <div>
                <p>User Score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
          </Box>
        </>
      )}
    </main>
  );
};

export default MovieMarkup;
