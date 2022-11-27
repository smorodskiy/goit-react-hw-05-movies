import React, { useEffect, useState } from 'react';

import { getTrendingMovies } from 'utils/api';

import { Container } from 'components/App/App.styled';
import { Title } from './Home.styled';

import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
  // Global states
  const [movies, setMovies] = useState([]);

  // Fetchs movies on mount
  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Home;
