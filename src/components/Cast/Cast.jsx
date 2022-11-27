import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'utils/api';
import { ListItem, Wrapper } from './Cast.styled';

const PREFIX_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER = 'https://via.placeholder.com/150';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getActors(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      {cast.length > 0 ? (
        <Wrapper>
          {cast.map(actor => (
            <ListItem key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? PREFIX_POSTER_URL + actor.profile_path
                    : PLACEHOLDER + '?text=' + actor.name
                }`}
                width="100%"
                height="100%"
                alt={actor.name}
              />
              <span>{actor.name}</span>
            </ListItem>
          ))}
        </Wrapper>
      ) : (
        <p>We don't have any cast for that movie</p>
      )}
    </div>
  );
};

export default Cast;
