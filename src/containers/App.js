import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" Component={Home} />
        <Route exact path="/movies" Component={Movies} />
        <Route exact path="/directors" Component={Directors} />
        <Route exact path="/actors" Component={Actors} />
      </div>
    </Router>
  );
};

export default App
