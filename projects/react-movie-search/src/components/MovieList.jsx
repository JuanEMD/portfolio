import PropTypes from "prop-types";

function Movie({ movie }) {
  return (
    <li>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
      <img src={movie.posterURL} alt="poster-image" />
    </li>
  );
}

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      ) : (
        <p>There are no movies to show</p>
      )}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
  }),
};

export default MovieList;
