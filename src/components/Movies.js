import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {<h1>Movies Page</h1>}
        {movies.map((movie,i)=>{
        return <div >Title: {movie.title} Time: {movie.time} Score: {movie.metascore}
        <ul>{movie.genres.map(genre => { return (<li>{genre}</li>)})}</ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
