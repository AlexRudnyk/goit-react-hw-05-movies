import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import Home from '../pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from './MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
