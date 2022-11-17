import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';
import Cast from 'pages/Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
