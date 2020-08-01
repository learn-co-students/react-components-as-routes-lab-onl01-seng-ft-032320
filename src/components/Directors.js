import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        <h2>Name: Scott Derrickson</h2>
        <ul>Movies:</ul>
        <li>Doctor Strange</li>
        <li>Sinister</li>
        <li>The Exorcism of Emily Rose</li>
      </div>

      <div>
        <h2>Mike Mitchell</h2>
        <ul>Movies:</ul>
        <li>Trolls</li>
        <li>Alvin and the Chipmunks: Chipwrecked</li>
        <li>Sky High</li>
      </div>

      <div>
        <h2>Name: Edward Zwick</h2>
        <ul>Movies:</ul>
        <li>Jack Reacher: Never Go Back</li>
        <li>Blood Diamond</li>
        <li>The Siege</li>
      </div>
    </div>
  );
}

export default Directors
