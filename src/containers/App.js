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
      <div>
      <NavBar />
      <Route expact path="/" component={Home}/>
      <Route expact path="/movies" component={Movies}/>
      <Route expact path="/directors" component={Directors}/>
      <Route expact path="/actors" component={Actors}/>
      </div>
    </Router>
  );
};

export default App
