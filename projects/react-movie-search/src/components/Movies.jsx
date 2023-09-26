import PropTypes from "prop-types";

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.year}</p>
          <img src={movie.posterURL} alt="poster-image" />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesAvailable() {
  return <p>There are no movies to show</p>;
}

function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <MovieList movies={movies} /> : <NoMoviesAvailable />;
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
