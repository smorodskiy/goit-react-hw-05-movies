import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd5db08081a23b85f2c18e58b0bb5a9b8';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieById = async movieId => {
  const res = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);

  return res.data;
};

export const getMovieByQuery = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return res.data.results;
};

export const getActors = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const getReviews = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return res.data.results;
};
