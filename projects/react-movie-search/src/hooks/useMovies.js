import { useRef, useState, useMemo } from "react";
import { searchMovie } from "../services/movies";

export function useMovies({ search = "", sort }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async ({ search }) => {
    if (search === previousSearch.current) return;
    if (search === "") return;
    setIsLoading(true);
    try {
      const newMovies = await searchMovie({ search });
      setMovies(newMovies);
      previousSearch.current = search;
    } catch (error) {
      throw new Error("Error during fetching movies");
    } finally {
      setIsLoading(false);
    }
  };

  const sortedMovies = useMemo(() => {
    return movies && sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { isLoading, movies: sortedMovies, getMovies };
}
