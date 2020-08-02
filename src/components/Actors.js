import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      {<h1>Actors Page</h1>}
      {actors.map((actor,i)=>{
        return <div >{actor.name} 
        {actor.movies.map(movie => { return (<li>{movie}</li>)})}
        </div>
      })}
    </div>
  );
};

export default Actors;
