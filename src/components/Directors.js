import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsArray = directors.map((director, index) => {
    return (
      <div>
        <h3>Name: {director.name}</h3>
        <p>Movies: </p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
    <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors
