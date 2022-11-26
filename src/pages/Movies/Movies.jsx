import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmitQuery = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {});

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
    </div>
  );
};
