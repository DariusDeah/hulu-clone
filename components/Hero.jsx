import Image from "next/image";
import React from "react";

function Hero({ movie }) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";
  return (
    movie && (
      <div className="px-5 my-10 h-auto relative ">
        <Image
          layout="responsive"
          height={1080}
          width={1920}
          src={
            `${BASE_IMG_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_IMG_URL}${movie.poster_path}`
          }
          style={{ borderRadius: "0.7rem" }}
        />
        <div className="absolute -bottom-10 left-0 w-full md:flex flex-col justify-center items-center bg-gradient-to-t from-[#0b0c0f] transparent h-80  " />
      </div>
    )
  );
}

export default Hero;
