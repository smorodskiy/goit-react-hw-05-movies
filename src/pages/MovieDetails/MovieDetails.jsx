import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/api';
import {
  BackButton,
  Overview,
  PosterImage,
  Title,
  MovieDetailsWrapper,
  AddInfoWrapper,
} from './MovieDetails.styled';

const PREFIX_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <BackButton onClick={handleGoBack}>Go back</BackButton>
      <MovieDetailsWrapper>
        <PosterImage
          src={`${PREFIX_POSTER_URL}/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <div>
          <Title>{movie.title}</Title>
          <Overview>
            <b>Overview</b>
            <p>{movie.overview}</p>
            <b>Genres</b>
            <ul>
              {movie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </Overview>
        </div>
      </MovieDetailsWrapper>
      <AddInfoWrapper>
        <h2>Additional information</h2>
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </AddInfoWrapper>
      <Outlet />
    </>
  );
};

export default MovieDetails;
