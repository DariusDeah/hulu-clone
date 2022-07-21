import Image from "next/image";
import React from "react";

function Avatar({ img, width, height }) {
  return (
    <>
      <img
        src={img}
        alt=""
        className={`rounded-full h-${height || 12} w-${
          width || 12
        } ring-2 ring-white`}
      />
    </>
  );
}

export default Avatar;
