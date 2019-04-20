import React from 'react';
import './NavBar.css';
import { Link, NavLink, withRouter } from 'react-router-dom';


class NavBar extends React.Component {

  render() {
    return (
      <div className="NavBar">
       <Link to="/"><label id="name-label">DANIEL PENG</label></Link>
        <span id="nav-bar-list">
            {this.props.navBarItems.map(navBarItem => {
              return (
                <NavLink 
                  key={navBarItem.route}
                  exact={true} 
                  to={navBarItem.route}
                  className="nav-bar-item"
                  activeClassName="selected">
                    {navBarItem.name}
                  </NavLink>
              );
            })}
        </span>
      </div>
    );
  }

}

export default withRouter(NavBar);
