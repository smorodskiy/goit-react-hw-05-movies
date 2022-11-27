// {
//     "adult": false,
//     "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
//     "genre_ids": [
//         28,
//         14,
//         878
//     ],
//     "id": 436270,
//     "original_language": "en",
//     "original_title": "Black Adam",
//     "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
//     "popularity": 22201.949,
//     "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
//     "release_date": "2022-10-19",
//     "title": "Black Adam",
//     "video": false,
//     "vote_average": 6.9,
//     "vote_count": 1387
// }

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
