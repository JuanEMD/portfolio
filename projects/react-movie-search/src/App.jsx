import { useCallback, useState, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import { useMovies } from "./hooks/useMovies";
import "./css/app.css";
import Movies from "./components/Movies";

const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === "";
      return;
    }

    if (search === "") {
      setError("please write a movie name");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("You can not look for a movie with a number");
      return;
    }

    if (search.length < 3) {
      setError("Minimum 3 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { isLoading, movies, getMovies } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    // const fields = Object.fromEntries(new window.FormData(event.target));
    // updateSearch(fields.search);
    if (error) return;
    getMovies({ search });
  };

  const debounceGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 500),
    [getMovies]
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    if (error) return;
    debounceGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <main>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Movie name: </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Avengers..."
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
          {error && <p>{error}</p>}
        </form>
      </div>

      <div className="movieListWrapper">
        {isLoading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </div>
    </main>
  );
}

export default App;
