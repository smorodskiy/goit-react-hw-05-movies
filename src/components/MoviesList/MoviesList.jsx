import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(film => {
        const { id, original_title } = film;
        return (
          <Link key={id} state={{ from: location }} to={`/movies/${id}`}>
            <Item>{original_title}</Item>
          </Link>
        );
      })}
    </List>
  );
};

export default MovieList;
