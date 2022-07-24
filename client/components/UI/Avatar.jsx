import Image from "next/image";
import React from "react";

function Avatar({ img }) {
  return (
    <>
      <img
        src={img}
        alt=""
        className={`rounded-full h-14 w-14 ring-2 ring-white `}
      />
    </>
  );
}

export default Avatar;
