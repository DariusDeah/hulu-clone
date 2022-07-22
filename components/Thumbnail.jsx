import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useHover from "../hooks/useHover";
import useMovieData from "../hooks/useMovieData";
import { API_KEY } from "../utils/requests";
//i want a debounce action that will autoplay the movie trailer if the user is hovering over long enough

function Thumbnail({ result }) {
  const [trailers, setTrailers] = useState(null);
  const { img, title } = useMovieData(result);
  let thumbnailContent;

  const timeOut = setTimeout(() => {
    const fetchMovieTrailers = async () => {
      const movieTrailerResults = await fetch(
        `https://api.themoviedb.org/3/movie/${result.id}/videos?api_key=${API_KEY}&language=en-US`
      ).then((res) => res.json());
      setTrailers([
        {
          key: movieTrailerResults.results[2].key,
        },
      ]);
    };
    fetchMovieTrailers();
  }, 1500);

  const { handleMouseEnter, handleMouseLeave, hover } = useHover(
    () => timeOut,
    clearTimeout(timeOut)
  );

  if (hover && trailers && trailers.length) {
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
        src={img}
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
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Thumbnail;
