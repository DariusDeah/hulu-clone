import Image from "next/image";
import React from "react";

function Avatar({ img, width, height }) {
  console.log(width, height);
  return (
    <>
      <img
        src={img}
        alt=""
        className={`rounded-full h-${height} w-${width} ring-2 ring-white `}
      />
    </>
  );
}

export default Avatar;
