import React from "react";
import { directors, movies } from "../data";

const Directors = () => {
  let directorData = directors.map((director) => {
    return (
      <div>
        <h3>{director.name}</h3>
        {console.log(director)}
        <ul>
          {director.movies.map((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorData}
    </div>
  );
};

export default Directors;
