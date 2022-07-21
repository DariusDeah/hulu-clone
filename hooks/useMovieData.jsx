function useMovieData(movie) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
  const moveData = {
    img:
      `${BASE_IMG_URL}/${movie.backdrop_path || movie.poster_path}` ||
      `${BASE_IMG_URL}/${movie.poster_path}`,

    title: movie.title || movie.original_name,

    mediaType: movie.media_type && `${movie.media_type}`,
    realeaseData: movie.release_date || movie.first_air_date,
    likes: movie.vote_count,
  };
  return moveData;
}

export default useMovieData;
