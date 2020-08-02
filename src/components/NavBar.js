import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}

class NavBar extends React.Component {
  render() {
    return (
    <div className="navbar">
       <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'red'
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'red'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'red'
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          style={link}
          activeStyle={{
            background: 'red'
          }}
        >Actors</NavLink>
    </div>
  );
};
}

export default NavBar;
