import { useEffect } from "react";
import MovieList from "./components/MovieList";
import withResults from "./mocks/withResults.json";
import { useState } from "react";
// import withoutResults from "./mocks/withoutResults.json";

const api = "https://www.omdbapi.com/";
const apiKey = "ac2ec393";

function App() {
  const [search, setSearch] = useState("");

  const getMovies = (name) => {
    console.log(name);
    console.log(`${api}?apikey=${apiKey}&s=${name}`);
    // fetch(`${api}?apikey=${apiKey}&s=${name}`)
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };

  const mappedMovies = withResults.Search.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    posterURL: movie.Poster,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    setSearch(fields.Search);
    console.log(fields.search);
  };

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  useEffect(() => {
    console.log("search", search);
    getMovies(search);
  }, [search]);

  return (
    <>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Movie name: </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Avengers..."
            // onChange={handleOnChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="movieListWrapper">
        <MovieList movies={mappedMovies} />
      </div>
    </>
  );
}

export default App;
