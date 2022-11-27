import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from 'utils/api';
import {
  BackButton,
  Overview,
  PosterImage,
  Title,
  Wrapper,
} from './MovieDetails.styled';

const PREFIX_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
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
    <>
      <BackButton onClick={handleGoBack}>Go back</BackButton>
      <Wrapper>
        <PosterImage
          src={`${PREFIX_POSTER_URL}/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <div>
          <Title>{movie.title}</Title>
          <Overview>
            <b>Overview</b>
            <p>{movie.overview}</p>
          </Overview>
        </div>
      </Wrapper>
    </>
  );
};

export default MovieDetails;
