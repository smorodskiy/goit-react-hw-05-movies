import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from 'utils/api';

const PREFIX_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    fetchMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  if (!movie) return;

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h2>{movie.title}</h2>
      <img
        src={`${PREFIX_POSTER_URL}/${movie.poster_path}`}
        alt={`${movie.title}`}
      />
      <p>{movie.overview}</p>
    </div>
  );
};
