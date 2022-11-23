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

export const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(film => {
          const { id, original_title } = film;
          return <li key={id}>{original_title}</li>;
        })}
      </ul>
    </div>
  );
};
