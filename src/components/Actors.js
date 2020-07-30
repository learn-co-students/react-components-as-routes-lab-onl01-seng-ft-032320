import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsArray = actors.map((actor, index) => {
    return (
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies: </p>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
    <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
};

export default Actors;
