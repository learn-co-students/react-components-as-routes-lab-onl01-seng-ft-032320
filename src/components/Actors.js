import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let arr = actors.map((actor, index) => {
    return (
      <div>
        <h1>Name: {actor.name}</h1>
        <h3>Movies: </h3>
        <ul>
          {actor.movies.map(movie => 
          <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {arr}
    </div>
  );
};

export default Actors;
