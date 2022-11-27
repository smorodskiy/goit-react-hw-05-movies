import React, { useEffect, useState } from 'react';

import { fetchMovie } from 'utils/api';

import { Container } from 'components/App/App.styled';
import { Title } from './Home.styled';

import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
  // Global states
  const [movies, setMovies] = useState([]);

  // Fetchs movies on mount
  useEffect(() => {
    fetchMovie('').then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Home;
