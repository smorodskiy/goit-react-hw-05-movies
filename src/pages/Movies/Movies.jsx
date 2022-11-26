import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from 'utils/api';
import { MovieList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleChangeQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmitQuery = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchMovie({ keyword: query }).then(setMovies);
  }, [searchParams]);

  return (
    <div>  
      <form onSubmit={handleSubmitQuery}>
        <input
          type="test"
          name="movie"
          onChange={handleChangeQuery}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};
