import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";
import Card from "./Card";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="-mt-40  mb-30 p-12 grid sm:grid  md:grid-cols-7 xl:flex-grow-0 whitespace-nowrap  space-x-2 3xl:flex flex-wrap justify-center  overflow-x-scroll scrollbar-hide "
        // className="flex -mt-48 mb-48 justify-center  sm:px-20   whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          // <h2
          //   key={key}
          //   onClick={() => router.push(`/?genre=${key}`)}
          //   className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-green-500 active:text-green-700 "
          // >
          //   {title}
          // </h2>
          <div className=" p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Card key={key} title={title} link={`/?genre=${key}`} />
          </div>
        ))}
      </div>
      {/* this is how we get the dissapering effect */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0b0c0f] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
