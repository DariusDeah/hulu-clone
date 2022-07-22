import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ results, genre }) {
  console.log(results);

  return (
    <div>
      {/* <h2 className="px-5 text-4xl">{genre}</h2> */}
      <div className="px-5 my-10  sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center ">
        {results &&
          results.map((result) => (
            <Thumbnail key={result.id} result={result} />
          ))}
      </div>
    </div>
  );
}

export default Results;
