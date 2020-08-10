import React from "react";
import { actors } from "../data";

const Actors = () => {
  let actorsData = actors.map((actor) => {
    return (
      <div>
        {console.log(actor)}
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsData}
    </div>
  );
};

export default Actors;
