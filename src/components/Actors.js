import React from 'react';
import { actors } from '../data';
import { act } from 'react-test-renderer';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor,key) => 
        <div className='actor'>{actor.name} 
        {actor.movies.map((movie, key) => 
          <p>{movie}</p>
          )}
        
        </div>)}
    </div>
  );
};

export default Actors;
