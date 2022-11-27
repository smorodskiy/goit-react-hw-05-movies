import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from 'utils/api';
import { Button, FormStyled, Input, SearchWrap } from './Movies.styled';
import  MovieList  from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleChangeQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmitQuery = e => {
    e.preventDefault();
    setSearchParams({ query });
    console.log('test');
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchMovie({ keyword: query }).then(setMovies);
  }, [searchParams]);

  return (
    <>
      <SearchWrap>
        <FormStyled onSubmit={handleSubmitQuery}>
          <Input
            type="text"
            name="movie"
            onChange={handleChangeQuery}
            value={query}
          />
          <Button type="submit">Search</Button>
        </FormStyled>
      </SearchWrap>
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
