import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
  {movies.map((movie, key) => <div className={key}>{movie.title} {movie.time} {movie.metascore} {movie.genres.map((genre, key) => <p>{genre}</p>)}</div>)}
    </div>
  );
};

export default Movies;
