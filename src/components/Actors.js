import React from 'react';
import { actors } from '../data';


export default class Actors extends React.Component {

  render() {
    return (
        <div>
          <h1>Actors Page</h1>
          {actors.map((actor,key) => {
            return(
              <div className="actor" key={key}>
                <h3>Name: {actor.name}</h3>
                <p>Movies: </p>
                <ul>
                  {actor.movies.map(movie => <li>{movie}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
    )
  }
}
