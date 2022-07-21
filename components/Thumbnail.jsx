import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
//i want a debounce action that will autoplay the movie trailer if the user is hovering over long enough
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

function Thumbnail({ result }) {
  const [trailers, setTrailers] = useState(null);
  const [hover, setHover] = useState(false);
  let thumbnailContent;

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    if (hover) {
      const timeOut = setTimeout(() => {
        const fetchMovieTrailers = async () => {
          const movieTrailerResults = await fetch(
            `https://api.themoviedb.org/3/movie/${result.id}/videos?api_key=f769ce3c4434058a152234a26d21961f&language=en-US`
          ).then((res) => res.json());
          setTrailers([
            {
              key: movieTrailerResults.results[2].key,
            },
          ]);
        };
        fetchMovieTrailers();
      }, 1500);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [hover]);

  if (hover && trailers && trailers.length) {
    console.log(trailers[0].key);
    thumbnailContent = (
      <iframe
        src={`https://www.youtube.com/embed/${trailers[0].key}?controls=0&autoplay=1&muted=1`}
        title="YouTube video player"
        style={{ borderRadius: "1rem", width: "100%", height: "100%" }}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }

  if (!hover) {
    thumbnailContent = (
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_IMG_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_IMG_URL}${result.poster_path}`
        }
        style={{
          borderRadius: ".5rem",
        }}
      />
    );
  }

  return (
    <div
      className=" p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {thumbnailContent}
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        {/* <p>
          {result.media_type && `${result.media_type} - `}
          {""}
          {result.release_date || result.first_air_date} - {""}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p> */}
      </div>
    </div>
  );
}

export default Thumbnail;
