import React, { useEffect, useState } from 'react';

// Pixabay API
// import { Pixabay } from 'utils/http/fetchImages';

import { fetchMovie } from 'utils/api';

// import {
//   ImageGallery,
//   Loader,
//   LoadMoreButton,
//   Modal,
//   Searchbar,
// } from 'components';

import { Container } from 'components/App/App.styled';

export const Home = () => {
  // Global states
  const [movies, setMovies] = useState([]);

  // On update component
  useEffect(() => {
    fetchMovie('').then(setMovies);
  }, []);


  return (
    <Container>
      
    </Container>
  );
};
