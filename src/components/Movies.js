import React from 'react';
import { movies } from '../data';


const Movies = () => {
  let moviesArray = movies.map((movie, index) => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time}</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
        {moviesArray}
    </div>
  );
};

export default Movies;
