import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => { return(
          <div key={i} className="director">
            <h3>Name: {director.name}</h3>
            <p>Movies:</p>
              <ul>
                {director.movies.map((movie, i) => {return (<li key={i}>{movie}</li>)}   )}
              </ul>
          </div>)
        })}
    </div>
  );
}

export default Directors
