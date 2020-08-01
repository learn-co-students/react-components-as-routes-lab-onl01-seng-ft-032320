import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>

      {directors.map((director, key) => 
      <div className={key}>{director.name} {director.movies.map((movie, key) => <p>{movie}</p>)}</div>
      )}
    </div>
  );
}

export default Directors
