import React from "react";
import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="flex">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}>{title}</h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
