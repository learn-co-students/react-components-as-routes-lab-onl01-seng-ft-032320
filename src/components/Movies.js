import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

      <div>
        <h2>Name: Doctor Strange</h2>
        <p>Time: 115</p>
        <ul>Genres: </ul>
        <li>Action</li>
        <li>Adventure</li>
        <li>Fantasy</li>
      </div>

      <div>
        <h2>Name: Trolls</h2>
        <p>Time: 92</p>
        <ul>Genres:</ul>
        <li>Animation</li>
        <li>Adventure</li>
        <li>Comedy</li>
        <li>Family</li>
        <li>Fantasy</li>
      </div>

      <div>
        <h2>Name: Jack Reacher: Never Go Back</h2>
        <p>Time: 118</p>
        <ul>Genres:</ul>
        <li>Action</li>
        <li>Adventure</li>
        <li>Crime</li>
        <li>Mystery</li>
        <li>Thriller</li>
      </div>
    </div>
  );
};

export default Movies;
