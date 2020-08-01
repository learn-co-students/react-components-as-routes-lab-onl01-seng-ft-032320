import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        <h2>Name: Benedict Cumberbatch</h2>
        <ul>Movies:</ul>
        <li>Doctor Strange</li>
        <li>The Imitation Game</li>
        <li>Black Mass</li>
      </div>

      <div>
        <h2>Name: Justin Timberlake</h2>
        <ul>Movies:</ul>
        <li>Trolls</li>
        <li>Friends with Benefits</li>
        <li>The Social Network</li>
      </div>

      <div>
        <h2>Name: Anna Kendrick</h2>
        <ul>Movies:</ul>
        <li>Trolls</li>
        <li>Pitch Perfect</li>
        <li>Into The Woods</li>
      </div>

      <div>
        <h2>Name: Tom Cruise</h2>
        <ul>Movies:</ul>
        <li>Jack Reacher: Never Go Back</li>
        <li>Mission Impossible 4</li>
        <li>War of the Worlds</li>
      </div>
    </div>
  );
};

export default Actors;
