import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
