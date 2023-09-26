const apiKey = "ac2ec393";

export const searchMovie = async ({ search }) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
    );
    const json = await response.json();
    const movies = json.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      posterURL: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
