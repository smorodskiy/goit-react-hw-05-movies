import React, { useEffect, useState } from 'react';

import { Container } from 'components/App/App.styled';
import { fetchMovie } from 'utils/api';
import { MovieList } from 'components/MoviesList/MoviesList';
import { NavBar } from 'components/NavBar/NavBar';

export const Home = () => {
  // Global states
  const [movies, setMovies] = useState([]);

  // Fetchs movies on mount
  useEffect(() => {
    fetchMovie('').then(setMovies);
  }, []);

  return (
    <Container>
      <NavBar />
      <MovieList movies={movies} />
    </Container>
  );
};
