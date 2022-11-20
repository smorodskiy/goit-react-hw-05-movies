import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />

      {/* '/movies' */}
      {/* '/movies/:movieId' */}
      {/* '/movies/:movieId/cast' */}
      {/* '/movies/:movieId/reviews' */}

    </Routes>
  );
};

export { App };
