import React from 'react';
import { movies } from '../data';

// const Movie = ({movie}) => {
//   return (
//     <div>
//     Title: {movie.title} <br/>
//     Time: {movie.time} <br/>
//     Genres: <ul>
//       {movie.genres.map(genre => 
//         <li>{genre}</li>
//         )}
//     </ul>
//   </div>
//   )
// }

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =>
          <div>
            Title: {movie.title} <br/>
            Time: {movie.time} <br/>
            Genres: <ul>
              {movie.genres.map(genre => 
                <li>{genre}</li>
                )}
            </ul>
          </div>
        )}
    </div>
  )
};

export default Movies;
