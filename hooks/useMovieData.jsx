function useMovieData(movie) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";
  const moveData = {
    img:
      `${BASE_IMG_URL}${movie.backdrop_path || movie.poster_path}` ||
      `${BASE_IMG_URL}${movie.poster_path}`,
    title: movie.title || movie.original_name,
  };
  return moveData;
}

export default useMovieData;
